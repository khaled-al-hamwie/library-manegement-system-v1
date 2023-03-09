"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.issueRouterAdmin = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const issueController_1 = __importDefault(require("../../app/controllers/issueController"));
const validationHandler_1 = require("../../app/middleware/validationHandler");
const id_1 = require("../../app/schemas/id");
const issueValidator_1 = require("../../app/validators/issueValidator");
exports.issueRouterAdmin = (0, express_1.Router)();
exports.issueRouterAdmin
    .route("/issue")
    .get((0, express_validator_1.param)("name"), validationHandler_1.validationHandler, issueController_1.default.getIssue)
    .post((0, issueValidator_1.issueValidator)(), validationHandler_1.validationHandler, issueController_1.default.createIssue);
exports.issueRouterAdmin
    .route("/issue/:id")
    .all(id_1.id, validationHandler_1.validationHandler)
    .patch((0, issueValidator_1.issueValidator)(true), validationHandler_1.validationHandler, issueController_1.default.updateIssue)
    .delete(issueController_1.default.deleteIssue);
