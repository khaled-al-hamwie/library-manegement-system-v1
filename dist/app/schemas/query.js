"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isQuery = void 0;
const express_validator_1 = require("express-validator");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
function isQuery(title) {
    return [
        (0, express_validator_1.query)(title)
            .optional()
            .trim()
            .isString()
            .withMessage((value) => validationMessage_1.default.type("string", value))
            .isLength({ min: 3, max: 45 })
            .withMessage(validationMessage_1.default.outOfLength(title)),
    ];
}
exports.isQuery = isQuery;
