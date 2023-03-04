"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerController_1 = __importDefault(require("../app/controllers/registerController"));
const validationHandler_1 = require("../app/middleware/validationHandler");
const registerValidator_1 = require("../app/validators/registerValidator");
const authorRoute_1 = require("./sub-routes/authorRoute");
const bookRoute_1 = require("./sub-routes/bookRoute");
const categoryRoute_1 = require("./sub-routes/categoryRoute");
const publicRouter = (0, express_1.Router)();
publicRouter
    .route("/login")
    .post((0, registerValidator_1.loginValidator)(), validationHandler_1.validationHandler, registerController_1.default.login);
publicRouter.use(authorRoute_1.authorRouterPublic, categoryRoute_1.categoryRouterPublic, bookRoute_1.bookRouterPublic);
exports.default = publicRouter;
