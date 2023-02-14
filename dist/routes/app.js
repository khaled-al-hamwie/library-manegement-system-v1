"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = require("express");
const authorRoute_1 = __importDefault(require("./authorRoute"));
const bookRoute_1 = __importDefault(require("./bookRoute"));
const categoryRoute_1 = __importDefault(require("./categoryRoute"));
const publisherRoute_1 = __importDefault(require("./publisherRoute"));
const statusRouter_1 = __importDefault(require("./statusRouter"));
const router = (0, express_1.Router)();
router.use(body_parser_1.default.urlencoded({ extended: false }));
router.use((0, express_1.json)());
router.use("/admin", categoryRoute_1.default, authorRoute_1.default, publisherRoute_1.default, statusRouter_1.default, bookRoute_1.default);
exports.default = router;
