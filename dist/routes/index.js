"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const databaseProvider_1 = __importDefault(require("../app/providers/databaseProvider"));
const app_1 = __importDefault(require("./app"));
const app = (0, express_1.default)();
app.use(app_1.default);
databaseProvider_1.default
    .sync()
    .then(() => app.listen(process.env.PORT))
    .catch(console.error);
