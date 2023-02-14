"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statusController_1 = __importDefault(require("../app/controllers/statusController"));
const validationHandler_1 = require("../app/middleware/validationHandler");
const id_1 = require("../app/schemas/id");
const statusValidator_1 = require("../app/validators/statusValidator");
const statusRouter = (0, express_1.Router)();
statusRouter
    .route("/status")
    .get(statusController_1.default.getStatus)
    .post((0, statusValidator_1.statusValidator)(), validationHandler_1.validationHandler, statusController_1.default.createStatus);
statusRouter
    .route("/status/:id")
    .all([...id_1.id], validationHandler_1.validationHandler)
    .get(statusController_1.default.showStatus)
    .patch((0, statusValidator_1.statusValidator)(true), validationHandler_1.validationHandler, statusController_1.default.updateStatus)
    .delete(statusController_1.default.deleteStatus);
exports.default = statusRouter;
