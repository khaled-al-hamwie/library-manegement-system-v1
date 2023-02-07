"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.use((0, express_1.json)());
router.use(body_parser_1.default.urlencoded({ extended: false }));
exports.default = router;
