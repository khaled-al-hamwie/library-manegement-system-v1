"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationValidator = void 0;
const express_validator_1 = require("express-validator");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
const forignKey_1 = require("../schemas/forignKey");
function reservationValidator() {
    return [
        ...(0, forignKey_1.forignKey)("book_id"),
        ...(0, forignKey_1.forignKey)("reader_id"),
        (0, express_validator_1.body)("day")
            .notEmpty()
            .withMessage(validationMessage_1.default.empty("day"))
            .bail()
            .isInt({ min: 0, max: 60 })
            .withMessage(validationMessage_1.default.type("day", "of day")),
    ];
}
exports.reservationValidator = reservationValidator;
