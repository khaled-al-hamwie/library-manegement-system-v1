"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const readerController_1 = __importDefault(require("../app/controllers/readerController"));
const authMiddleware_1 = require("../app/middleware/authMiddleware");
const validationHandler_1 = require("../app/middleware/validationHandler");
const readerValidator_1 = require("../app/validators/readerValidator");
const registerValidator_1 = require("../app/validators/registerValidator");
const readerRouter = (0, express_1.Router)();
readerRouter.post("/register", (0, registerValidator_1.registerValidator)(), validationHandler_1.validationHandler, readerController_1.default.createReader);
readerRouter
    .use(authMiddleware_1.userMiddleware)
    .route("/me")
    .get(readerController_1.default.showReader)
    .patch((0, readerValidator_1.readerValidator)(), validationHandler_1.validationHandler, readerController_1.default.updateReader)
    .delete(readerController_1.default.deleteReader);
exports.default = readerRouter;
