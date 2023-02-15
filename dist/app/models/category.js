"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = exports.attr = exports.name = void 0;
// import inflection from "inflection";
const sequelize_1 = require("sequelize");
const databaseProvider_1 = __importDefault(require("../providers/databaseProvider"));
const book_1 = require("./book");
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
        unique: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING(245),
        allowNull: true,
    },
};
class Category extends sequelize_1.Model {
}
exports.Category = Category;
Category.init(exports.attr, {
    sequelize: databaseProvider_1.default,
    tableName: "Category",
    timestamps: false,
    modelName: "Category",
});
Category.hasMany(book_1.Book, {
    foreignKey: "category_id",
});
book_1.Book.belongsTo(Category, { foreignKey: "category_id" });
