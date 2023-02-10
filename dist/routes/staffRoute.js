"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookController_1 = __importDefault(require("../app/controllers/bookController"));
const categoryController_1 = __importDefault(require("../app/controllers/categoryController"));
const categoryValidator_1 = require("../app/validators/categoryValidator");
const router = (0, express_1.Router)();
router
    .route("/category")
    .get(categoryController_1.default.getCategory)
    .post((0, categoryValidator_1.categoryCreateValidate)(), categoryController_1.default.createCategory);
router
    .route("/category/:id")
    .get(categoryController_1.default.showCategory)
    .patch((0, categoryValidator_1.categoryUpdateValidate)(), categoryController_1.default.updateCategory)
    .delete(categoryController_1.default.deleteCategory);
router.route("/book").get(bookController_1.default.getBooks);
exports.default = router;
