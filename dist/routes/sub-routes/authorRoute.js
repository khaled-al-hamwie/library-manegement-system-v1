"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorRouterPublic = exports.authorRouterAdmin = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const authorController_1 = __importDefault(require("../../app/controllers/authorController"));
const validationHandler_1 = require("../../app/middleware/validationHandler");
const id_1 = require("../../app/schemas/id");
const authorValidator_1 = require("../../app/validators/authorValidator");
exports.authorRouterAdmin = (0, express_1.Router)();
exports.authorRouterPublic = (0, express_1.Router)();
exports.authorRouterAdmin
    .route("/author")
    .get((0, express_validator_1.param)("name"), validationHandler_1.validationHandler, authorController_1.default.getAuthor)
    .post((0, authorValidator_1.authorValidator)(), validationHandler_1.validationHandler, authorController_1.default.createAuthor);
exports.authorRouterAdmin
    .route("/author/:id")
    .all(id_1.id, validationHandler_1.validationHandler)
    .get(authorController_1.default.showAuthor)
    .patch((0, authorValidator_1.authorValidator)(true), validationHandler_1.validationHandler, authorController_1.default.updateAuthor)
    .delete(authorController_1.default.deleteAuthor);
exports.authorRouterPublic
    .route("/author")
    .get((0, express_validator_1.param)("name"), validationHandler_1.validationHandler, authorController_1.default.getAuthor);
exports.authorRouterPublic
    .route("/author/:id")
    .all(id_1.id, validationHandler_1.validationHandler)
    .get(authorController_1.default.showAuthor);
