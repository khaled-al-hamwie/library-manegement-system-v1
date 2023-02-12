"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.descriptionO = exports.description = void 0;
const express_validator_1 = require("express-validator");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
exports.description = [
    (0, express_validator_1.body)("description")
        .trim()
        .isLength({ min: 3, max: 245 })
        .withMessage(validationMessage_1.default.outOfLength("description")),
];
exports.descriptionO = [
    (0, express_validator_1.body)("description")
        .optional()
        .trim()
        .isLength({ min: 3, max: 245 })
        .withMessage(validationMessage_1.default.outOfLength("description")),
];
