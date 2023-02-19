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
const sequelize_1 = require("sequelize");
const book_1 = require("../models/book");
const responses_1 = __importDefault(require("../traits/responses"));
const saveImage_1 = __importDefault(require("../traits/saveImage"));
class BookController {
    static getBooks(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const title = req.query.title;
            if (!title)
                return responses_1.default.fetch(res, yield book_1.Book.findAll());
            else {
                return responses_1.default.fetch(res, yield book_1.Book.findAll({
                    where: { name: { [sequelize_1.Op.regexp]: title } },
                }));
            }
        });
    }
    static createBook(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const imageName = req.file
                ? Date.now() +
                    "-" +
                    Math.round(Math.random() * 1e9) +
                    "-" +
                    req.file.originalname.trim()
                : null;
            yield book_1.Book.create({
                category_id: req.body.category_id,
                author_id: req.body.author_id,
                publisher_id: req.body.publisher_id,
                status_id: req.body.status_id,
                title: req.body.title,
                description: req.body.description,
                edition: req.body.edition,
                price: req.body.price,
                reservation_price: req.body.reservation_price,
                image: imageName,
            })
                .then((result) => {
                if (req.file && imageName)
                    (0, saveImage_1.default)(req.file.buffer, imageName);
                return responses_1.default.creation(res, result, "book");
            })
                .catch((err) => responses_1.default.server(res, err));
        });
    }
    static showBook(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const book = yield book_1.Book.findByPk(id);
            if (book) {
                const publisher = yield book.getPublisher();
                return responses_1.default.fetch(res, {
                    book_id: book.book_id,
                    category: {
                        category_id: book.category_id,
                        name: (yield book.getCategory()).name,
                    },
                    author: {
                        author_id: book.author_id,
                        name: (yield book.getAuthor()).name,
                    },
                    publisher: {
                        publisher_id: book.publisher_id,
                        name: publisher.name,
                        year: publisher.publishing_date,
                    },
                    status: {
                        status_id: book.status_id,
                        name: (yield book.getStatus()).name,
                    },
                    title: book.title,
                    description: book.description,
                    edition: book.edition,
                    price: book.price,
                    reservation_price: book.reservation_price,
                    image: book.image,
                });
            }
            return responses_1.default.notFound(res, "book", id);
        });
    }
    static updateBook(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const request = req.body;
            const book = yield book_1.Book.findByPk(id);
            const imageName = req.file
                ? Date.now() +
                    "-" +
                    Math.round(Math.random() * 1e9) +
                    "-" +
                    req.file.originalname.trim()
                : null;
            if (book) {
                yield book
                    .update({
                    category_id: request.category_id
                        ? request.category_id
                        : book.category_id,
                    author_id: request.author_id
                        ? request.author_id
                        : book.author_id,
                    publisher_id: request.publisher_id
                        ? request.publisher_id
                        : book.publisher_id,
                    status_id: request.status_id
                        ? request.status_id
                        : book.status_id,
                    title: request.title ? request.title : book.title,
                    description: request.description
                        ? request.description
                        : book.description,
                    edition: request.edition ? request.edition : book.edition,
                    price: request.price ? request.price : book.price,
                    reservation_price: request.reservation_price
                        ? request.reservation_price
                        : book.reservation_price,
                    image: imageName ? imageName : book.image,
                })
                    .then(() => {
                    if (req.file && imageName)
                        (0, saveImage_1.default)(req.file.buffer, imageName);
                    return responses_1.default.ok(res);
                })
                    .catch((err) => responses_1.default.server(res, err));
            }
            else
                return responses_1.default.notFound(res, "book", id);
        });
    }
    static deleteBook(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const book = yield book_1.Book.findByPk(id);
            if (book) {
                yield book.destroy();
                return responses_1.default.ok(res);
            }
            return responses_1.default.notFound(res, "book", id);
        });
    }
}
exports.default = BookController;
