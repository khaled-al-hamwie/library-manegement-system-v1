"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentValidator = void 0;
const express_validator_1 = require("express-validator");
const sequelize_1 = require("sequelize");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
const book_1 = require("../models/book");
const forignKey_1 = require("../schemas/forignKey");
function paymentValidator() {
    return [
        (0, express_validator_1.body)("books")
            .notEmpty()
            .withMessage(validationMessage_1.default.empty("books"))
            .bail()
            .isArray({ min: 1 })
            .withMessage(validationMessage_1.default.type("array", ""))
            .bail()
            .custom((value, { req, location, path }) => __awaiter(this, void 0, void 0, function* () {
            let typeError = [];
            let id = [];
            value.forEach((val) => {
                if (typeof val !== "number")
                    typeError.push(val);
                else
                    id.push(val);
            });
            if (typeError.length > 0)
                return Promise.reject(`the values of book [${typeError}] are not a valid id`);
            let books = yield book_1.Book.findAll({
                where: {
                    [sequelize_1.Op.and]: { book_id: { [sequelize_1.Op.in]: id }, status_id: 2 },
                },
            });
            if (books.length < id.length) {
                let books_id = books.map((book) => {
                    return Number(book.book_id);
                });
                let r = id.filter((val) => !books_id.includes(val));
                return Promise.reject(`the books with the id's [${r}] don't exists or not available in the current time`);
            }
            return Promise.resolve();
        })),
        ...(0, forignKey_1.forignKey)("reader_id"),
    ];
}
exports.paymentValidator = paymentValidator;
