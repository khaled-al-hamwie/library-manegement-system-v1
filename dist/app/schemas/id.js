"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.id = void 0;
const express_validator_1 = require("express-validator");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
exports.id = [
    (0, express_validator_1.param)("id")
        .isNumeric()
        .withMessage((value) => validationMessage_1.default.type("number", value)),
];
