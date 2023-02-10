"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = require("express");
const staffRoute_1 = __importDefault(require("./staffRoute"));
const router = (0, express_1.Router)();
router.use(body_parser_1.default.urlencoded({ extended: false }));
router.use((0, express_1.json)());
router.use("/admin", staffRoute_1.default);
exports.default = router;
