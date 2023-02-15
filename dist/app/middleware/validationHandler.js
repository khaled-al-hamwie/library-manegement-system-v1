"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationHandler = void 0;
const express_validator_1 = require("express-validator");
const responses_1 = __importDefault(require("../traits/responses"));
const errorFormatter = ({ location, msg, param, value, nestedErrors, }) => {
    return { field: param, error: msg };
};
function validationHandler(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req).formatWith(errorFormatter);
    if (!errors.isEmpty()) {
        return responses_1.default.validation(res, errors.array());
    }
    next();
}
exports.validationHandler = validationHandler;
