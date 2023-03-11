"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportRouterAdmin = void 0;
const express_1 = require("express");
const reportController_1 = __importDefault(require("../../app/controllers/reportController"));
const validationHandler_1 = require("../../app/middleware/validationHandler");
const reportValidator_1 = require("../../app/validators/reportValidator");
exports.reportRouterAdmin = (0, express_1.Router)();
exports.reportRouterAdmin
    .route("/report")
    .get(reportController_1.default.getReport)
    .post((0, reportValidator_1.reportValidator)(), validationHandler_1.validationHandler, reportController_1.default.createReport);
