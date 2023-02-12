"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = __importDefault(require("../app/controllers/categoryController"));
const validationHandler_1 = require("../app/middleware/validationHandler");
const id_1 = require("../app/schemas/id");
const categoryValidator_1 = require("../app/validators/categoryValidator");
const categoryRouter = (0, express_1.Router)();
categoryRouter
    .route("/category")
    .get(categoryController_1.default.getCategory)
    .post((0, categoryValidator_1.categoryValidatorC)(), validationHandler_1.validationHandler, categoryController_1.default.createCategory);
categoryRouter
    .route("/category/:id")
    .all([...id_1.id], validationHandler_1.validationHandler)
    .get(categoryController_1.default.showCategory)
    .patch((0, categoryValidator_1.categoryValidatorU)(), validationHandler_1.validationHandler, categoryController_1.default.updateCategory)
    .delete(categoryController_1.default.deleteCategory);
exports.default = categoryRouter;
