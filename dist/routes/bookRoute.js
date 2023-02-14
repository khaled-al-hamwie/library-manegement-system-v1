"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = __importDefault(require("../app/controllers/categoryController"));
const validationHandler_1 = require("../app/middleware/validationHandler");
const id_1 = require("../app/schemas/id");
const bookValidator_1 = require("../app/validators/bookValidator");
const bookRouter = (0, express_1.Router)();
bookRouter
    .route("/book")
    .get((0, bookValidator_1.bookValidator)("get"), validationHandler_1.validationHandler, categoryController_1.default.getCategory)
    .post((0, bookValidator_1.bookValidator)("create"), validationHandler_1.validationHandler, categoryController_1.default.createCategory);
bookRouter
    .route("/book/:id")
    .all([...id_1.id], validationHandler_1.validationHandler)
    .get(categoryController_1.default.showCategory)
    .patch((0, bookValidator_1.bookValidator)("update"), validationHandler_1.validationHandler, categoryController_1.default.updateCategory)
    .delete(categoryController_1.default.deleteCategory);
exports.default = bookRouter;
