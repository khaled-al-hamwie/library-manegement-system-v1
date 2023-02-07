"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = exports.attr = exports.name = void 0;
const sequelize_1 = require("sequelize");
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
        allowNull: true,
    },
    born: sequelize_1.DataTypes.DATE,
};
const Author = (sequelize) => {
    class Author extends sequelize_1.Model {
    }
    Author.init(exports.attr, {
        sequelize,
        tableName: "Author",
        timestamps: false,
        modelName: "Author",
    });
    return Author;
};
exports.Author = Author;
