"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("../providers/envProvider");
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { dialect: "mysql", host: process.env.DB_HOST, logging: false });
exports.default = sequelize;
