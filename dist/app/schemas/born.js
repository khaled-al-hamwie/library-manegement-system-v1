"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bornO = exports.born = void 0;
const express_validator_1 = require("express-validator");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
exports.born = [
    (0, express_validator_1.body)("born").isDate().withMessage(validationMessage_1.default.type("date")),
];
exports.bornO = [
    (0, express_validator_1.body)("born")
        .optional()
        .isDate()
        .withMessage(validationMessage_1.default.type("date")),
];
