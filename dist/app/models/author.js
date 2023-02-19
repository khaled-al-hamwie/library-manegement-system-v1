"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = exports.attr = exports.name = void 0;
const sequelize_1 = require("sequelize");
const databaseProvider_1 = __importDefault(require("../providers/databaseProvider"));
const book_1 = require("./book");
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
        type: sequelize_1.DataTypes.STRING(500),
    },
    born: sequelize_1.DataTypes.DATEONLY,
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
Author.hasMany(book_1.Book, { foreignKey: "author_id" });
book_1.Book.belongsTo(Author, { foreignKey: "author_id" });
