import { body, Meta, ValidationChain } from "express-validator";
import validationMessage from "../messages/validationMessage";
import { Author } from "../models/author";
import { Book } from "../models/book";
import { Category } from "../models/category";
import { Issue } from "../models/issue";
import { Payment } from "../models/payment";
import { Publisher } from "../models/publisher";
import { Reader } from "../models/reader";
import { Reservation } from "../models/reservation";
import { Staff } from "../models/staff";
import { Status } from "../models/status";

type forignKeyType =
    | "category_id"
    | "author_id"
    | "publisher_id"
    | "status_id"
    | "book_id"
    | "staff_id"
    | "reader_id"
    | "issue_id"
    | "reservation_id"
    | "payment_id";
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
    } else if (path == "book_id") {
        const book = await Book.findByPk(value);
        if (!book)
            return Promise.reject(validationMessage.notFound("book", value));
    } else if (path == "reader_id") {
        const reader = await Reader.findByPk(value);
        if (!reader)
            return Promise.reject(validationMessage.notFound("reader", value));
    } else if (path == "staff_id") {
        const staff = await Staff.findByPk(value);
        if (!staff)
            return Promise.reject(validationMessage.notFound("staff", value));
    } else if (path == "issue_id") {
        const issue = await Issue.findByPk(value);
        if (!issue)
            return Promise.reject(validationMessage.notFound("issue", value));
    } else if (path == "reservation_id") {
        const reservation = await Reservation.findByPk(value);
        if (!reservation)
            return Promise.reject(validationMessage.notFound("staff", value));
    } else if (path == "payment_id") {
        const payment = await Payment.findByPk(value);
        if (!payment)
            return Promise.reject(validationMessage.notFound("payment", value));
    }
}
