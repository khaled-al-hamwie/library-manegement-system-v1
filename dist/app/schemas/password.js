"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.password = void 0;
const express_validator_1 = require("express-validator");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
function password() {
    return [
        (0, express_validator_1.body)("password")
            .trim()
            .isLength({ min: 20, max: 50 })
            .withMessage(validationMessage_1.default.outOfLength("password")),
        (0, express_validator_1.body)("confirm_password")
            .trim()
            .custom((input, { req, location, path }) => {
            if (input !== req.body.password) {
                throw new Error(`the password must match`);
            }
            return true;
        }),
    ];
}
exports.password = password;
