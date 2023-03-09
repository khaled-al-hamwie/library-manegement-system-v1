"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRouterPublic = exports.paymentRouterAdmin = void 0;
const express_1 = require("express");
const paymentController_1 = __importDefault(require("../../app/controllers/paymentController"));
const validationHandler_1 = require("../../app/middleware/validationHandler");
const paymentValidator_1 = require("../../app/validators/paymentValidator");
exports.paymentRouterAdmin = (0, express_1.Router)();
exports.paymentRouterPublic = (0, express_1.Router)();
exports.paymentRouterAdmin
    .route("/payment")
    .post((0, paymentValidator_1.paymentValidator)(), validationHandler_1.validationHandler, paymentController_1.default.createPayment)
    .get(paymentController_1.default.getPayment);
exports.paymentRouterPublic.get("/payment", paymentController_1.default.showPayment);
