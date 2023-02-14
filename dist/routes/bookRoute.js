"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookController_1 = __importDefault(require("../app/controllers/bookController"));
const validationHandler_1 = require("../app/middleware/validationHandler");
const id_1 = require("../app/schemas/id");
const bookValidator_1 = require("../app/validators/bookValidator");
const bookRouter = (0, express_1.Router)();
bookRouter
    .route("/book")
    .get((0, bookValidator_1.bookValidator)("get"), validationHandler_1.validationHandler, bookController_1.default.getBooks)
    .post((0, bookValidator_1.bookValidator)("create"), validationHandler_1.validationHandler, bookController_1.default.createBook);
bookRouter
    .route("/book/:id")
    .all([...id_1.id], validationHandler_1.validationHandler)
    .get(bookController_1.default.showBook)
    .patch((0, bookValidator_1.bookValidator)("update"), validationHandler_1.validationHandler, bookController_1.default.updateBook)
    .delete(bookController_1.default.deleteBook);
exports.default = bookRouter;
