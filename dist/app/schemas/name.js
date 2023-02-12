"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameO = exports.name = void 0;
const express_validator_1 = require("express-validator");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
exports.name = [
    (0, express_validator_1.body)("name")
        .trim()
        .isLength({ min: 3, max: 45 })
        .withMessage(validationMessage_1.default.outOfLength("name")),
];
exports.nameO = [
    (0, express_validator_1.body)("name")
        .optional()
        .trim()
        .isLength({ min: 3, max: 45 })
        .withMessage(validationMessage_1.default.outOfLength("name")),
];
