"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
function saveImage(buffer, name) {
    (0, fs_1.writeFile)(path_1.default.join("images", name), buffer, (err) => {
        if (err)
            throw err;
    });
}
exports.default = saveImage;
