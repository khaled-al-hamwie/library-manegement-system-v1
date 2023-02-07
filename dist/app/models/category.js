"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = exports.attr = exports.name = void 0;
// import inflection from "inflection";
const sequelize_1 = require("sequelize");
exports.name = "Category";
exports.attr = {
    category_id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.SMALLINT,
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
};
const Category = (sequelize) => {
    class Category extends sequelize_1.Model {
    }
    Category.init(exports.attr, {
        sequelize,
        tableName: "Publisher",
        timestamps: false,
        modelName: "Publisher",
    });
    return Category;
};
exports.Category = Category;
