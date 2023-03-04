"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouterPublic = exports.categoryRouterAdmin = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const categoryController_1 = __importDefault(require("../../app/controllers/categoryController"));
const validationHandler_1 = require("../../app/middleware/validationHandler");
const id_1 = require("../../app/schemas/id");
const categoryValidator_1 = require("../../app/validators/categoryValidator");
exports.categoryRouterAdmin = (0, express_1.Router)();
exports.categoryRouterPublic = (0, express_1.Router)();
exports.categoryRouterAdmin
    .route("/category")
    .get((0, express_validator_1.param)("name"), validationHandler_1.validationHandler, categoryController_1.default.getCategory)
    .post((0, categoryValidator_1.categoryValidator)(), validationHandler_1.validationHandler, categoryController_1.default.createCategory);
exports.categoryRouterAdmin
    .route("/category/:id")
    .all(id_1.id, validationHandler_1.validationHandler)
    .get(categoryController_1.default.showCategory)
    .patch((0, categoryValidator_1.categoryValidator)(true), validationHandler_1.validationHandler, categoryController_1.default.updateCategory)
    .delete(categoryController_1.default.deleteCategory);
exports.categoryRouterPublic
    .route("/category")
    .get((0, express_validator_1.param)("name"), validationHandler_1.validationHandler, categoryController_1.default.getCategory);
exports.categoryRouterPublic
    .route("/category/:id")
    .all(id_1.id, validationHandler_1.validationHandler)
    .get(categoryController_1.default.showCategory);
