"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const a = (0, fs_1.readFile)(path_1.default.join("cat.txt"), (err, data) => {
    const obj = [];
    data.toString()
        .split("\n")
        .forEach((field, i) => obj.push({
        categor_id: i + 1,
        name: field,
        description: "lorm lorm",
    }));
    (0, fs_1.writeFile)(path_1.default.join("info", "database", "schema", "category.json"), JSON.stringify(obj), (err) => {
        console.log(err);
    });
});
