"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorRoute_1 = require("./sub-routes/authorRoute");
const bookRoute_1 = require("./sub-routes/bookRoute");
const categoryRoute_1 = require("./sub-routes/categoryRoute");
const publicRouter = (0, express_1.Router)();
publicRouter.use(authorRoute_1.authorRouterPublic, categoryRoute_1.categoryRouterPublic, bookRoute_1.bookRouterPublic);
exports.default = publicRouter;
