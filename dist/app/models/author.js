"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = exports.attr = exports.name = void 0;
const sequelize_1 = require("sequelize");
const databaseProvider_1 = __importDefault(require("../providers/databaseProvider"));
exports.name = "Author";
exports.attr = {
    author_id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.MEDIUMINT,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING(245),
    },
    born: sequelize_1.DataTypes.DATE,
};
class Author extends sequelize_1.Model {
}
exports.Author = Author;
Author.init(exports.attr, {
    sequelize: databaseProvider_1.default,
    tableName: "Author",
    timestamps: false,
    modelName: "Author",
});
