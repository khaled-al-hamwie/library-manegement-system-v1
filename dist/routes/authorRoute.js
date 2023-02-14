"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorController_1 = __importDefault(require("../app/controllers/authorController"));
const validationHandler_1 = require("../app/middleware/validationHandler");
const id_1 = require("../app/schemas/id");
const authorValidator_1 = require("../app/validators/authorValidator");
const authorRouter = (0, express_1.Router)();
authorRouter
    .route("/author")
    .get(authorController_1.default.getAuthor)
    .post((0, authorValidator_1.authorValidator)(), validationHandler_1.validationHandler, authorController_1.default.createAuthor);
authorRouter
    .route("/author/:id")
    .all(id_1.id, validationHandler_1.validationHandler)
    .get(authorController_1.default.showAuthor)
    .patch((0, authorValidator_1.authorValidator)(true), validationHandler_1.validationHandler, authorController_1.default.updateAuthor)
    .delete(authorController_1.default.deleteAuthor);
exports.default = authorRouter;
