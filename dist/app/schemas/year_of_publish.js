"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.year_of_publishO = exports.year_of_publish = void 0;
const express_validator_1 = require("express-validator");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
exports.year_of_publish = [
    (0, express_validator_1.body)("year_of_publish")
        .isDate()
        .withMessage(validationMessage_1.default.type("date")),
];
exports.year_of_publishO = [
    (0, express_validator_1.body)("year_of_publish")
        .optional()
        .isDate()
        .withMessage(validationMessage_1.default.type("date")),
];
