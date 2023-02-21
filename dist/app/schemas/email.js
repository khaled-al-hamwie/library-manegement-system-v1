"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.email = void 0;
const express_validator_1 = require("express-validator");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
function email() {
    return [
        (0, express_validator_1.body)("email")
            .trim()
            .isEmail({ allow_ip_domain: false, allow_utf8_local_part: false })
            .withMessage((value) => validationMessage_1.default.type("email", value)),
    ];
}
exports.email = email;
