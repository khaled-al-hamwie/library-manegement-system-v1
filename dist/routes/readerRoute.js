"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const readerController_1 = __importDefault(require("../app/controllers/readerController"));
const validationHandler_1 = require("../app/middleware/validationHandler");
const registerValidator_1 = require("../app/validators/registerValidator");
const readerRouter = (0, express_1.Router)();
readerRouter
    .route("/register")
    .post((0, registerValidator_1.registerValidator)(), validationHandler_1.validationHandler, readerController_1.default.createReader);
exports.default = readerRouter;
