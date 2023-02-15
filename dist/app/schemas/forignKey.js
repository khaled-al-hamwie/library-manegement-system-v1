"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forignKeyO = exports.forignKey = void 0;
const express_validator_1 = require("express-validator");
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
const author_1 = require("../models/author");
const category_1 = require("../models/category");
const publisher_1 = require("../models/publisher");
const status_1 = require("../models/status");
function forignKey(field) {
    return [
        (0, express_validator_1.body)(field)
            .trim()
            .notEmpty()
            .withMessage(validationMessage_1.default.empty(field))
            .bail()
            .isNumeric({ no_symbols: true })
            .withMessage((value) => validationMessage_1.default.type("id", value))
            .bail()
            .custom(idExist),
    ];
}
exports.forignKey = forignKey;
function forignKeyO(field) {
    return [
        (0, express_validator_1.body)(field)
            .optional()
            .trim()
            .isNumeric({ no_symbols: true })
            .withMessage((value) => validationMessage_1.default.type("id", value))
            .bail()
            .custom(idExist),
    ];
}
exports.forignKeyO = forignKeyO;
function idExist(value, { req, location, path }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (path == "author_id") {
            const author = yield author_1.Author.findByPk(value);
            if (!author)
                return Promise.reject(validationMessage_1.default.notFound("author", value));
        }
        else if (path == "category_id") {
            const category = yield category_1.Category.findByPk(value);
            if (!category)
                return Promise.reject(validationMessage_1.default.notFound("category", value));
        }
        else if (path == "status_id") {
            const status = yield status_1.Status.findByPk(value);
            if (!status)
                return Promise.reject(validationMessage_1.default.notFound("status", value));
        }
        else if (path == "publisher_id") {
            const publisher = yield publisher_1.Publisher.findByPk(value);
            if (!publisher)
                return Promise.reject(validationMessage_1.default.notFound("publisher", value));
        }
    });
}
