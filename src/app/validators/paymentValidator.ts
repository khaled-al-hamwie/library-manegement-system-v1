import { body, Meta, ValidationChain } from "express-validator";
import { Op } from "sequelize";
import validationMessage from "../messages/validationMessage";
import { Book } from "../models/book";
import { forignKey } from "../schemas/forignKey";

export function paymentValidator(): ValidationChain[] {
    return [
        body("books")
            .notEmpty()
            .withMessage(validationMessage.empty("books"))
            .bail()
            .isArray({ min: 1 })
            .withMessage(validationMessage.type("array", ""))
            .bail()
            .custom(async (value: any[], { req, location, path }: Meta) => {
                let typeError: any[] = [];
                let id: number[] = [];
                value.forEach((val) => {
                    if (typeof val !== "number") typeError.push(val);
                    else id.push(val);
                });
                if (typeError.length > 0)
                    return Promise.reject(
                        `the values of book [${typeError}] are not a valid id`
                    );
                let books = await Book.findAll({
                    where: {
                        [Op.and]: { book_id: { [Op.in]: id }, status_id: 2 },
                    },
                });
                if (books.length < id.length) {
                    let books_id = books.map((book) => {
                        return Number(book.book_id);
                    });
                    let r = id.filter((val) => !books_id.includes(val));
                    return Promise.reject(
                        `the books with the id's [${r}] don't exists or not available in the current time`
                    );
                }
                return Promise.resolve();
            }),
        ...forignKey("reader_id"),
    ];
}
