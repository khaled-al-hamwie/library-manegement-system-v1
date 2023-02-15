import { body, Meta, ValidationChain } from "express-validator";
import validationMessage from "../messages/validationMessage";
import { Author } from "../models/author";
import { Category } from "../models/category";
import { Publisher } from "../models/publisher";
import { Status } from "../models/status";

type forignKeyType = "category_id" | "author_id" | "publisher_id" | "status_id";
export function forignKey(field: forignKeyType): ValidationChain[] {
    return [
        body(field)
            .trim()
            .notEmpty()
            .withMessage(validationMessage.empty(field))
            .bail()
            .isNumeric({ no_symbols: true })
            .withMessage((value) => validationMessage.type("id", value))
            .bail()
            .custom(idExist),
    ];
}
export function forignKeyO(field: forignKeyType): ValidationChain[] {
    return [
        body(field)
            .optional()
            .trim()
            .isNumeric({ no_symbols: true })
            .withMessage((value) => validationMessage.type("id", value))
            .bail()
            .custom(idExist),
    ];
}

async function idExist(value: any, { req, location, path }: Meta) {
    if (path == "author_id") {
        const author = await Author.findByPk(value);
        if (!author)
            return Promise.reject(validationMessage.notFound("author", value));
    } else if (path == "category_id") {
        const category = await Category.findByPk(value);
        if (!category)
            return Promise.reject(
                validationMessage.notFound("category", value)
            );
    } else if (path == "status_id") {
        const status = await Status.findByPk(value);
        if (!status)
            return Promise.reject(validationMessage.notFound("status", value));
    } else if (path == "publisher_id") {
        const publisher = await Publisher.findByPk(value);
        if (!publisher)
            return Promise.reject(
                validationMessage.notFound("publisher", value)
            );
    }
}
