"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateOnlyO = exports.dateOnly = void 0;
const express_validator_1 = require("express-validator");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
function dateOnly(title) {
    return [
        (0, express_validator_1.body)(title)
            .notEmpty()
            .withMessage(validationMessage_1.default.empty(title))
            .bail()
            .isDate()
            .withMessage((value) => validationMessage_1.default.type("date", value)),
    ];
}
exports.dateOnly = dateOnly;
function dateOnlyO(title) {
    return [
        (0, express_validator_1.body)(title)
            .optional()
            .isDate()
            .withMessage((value) => validationMessage_1.default.type("date", value)),
    ];
}
exports.dateOnlyO = dateOnlyO;
