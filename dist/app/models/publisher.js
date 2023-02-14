"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = exports.attr = exports.name = void 0;
// import inflection from "inflection";
const sequelize_1 = require("sequelize");
const databaseProvider_1 = __importDefault(require("../providers/databaseProvider"));
const book_1 = require("./book");
exports.name = "Publisher";
exports.attr = {
    publisher_id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.SMALLINT,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    publishing_date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
};
class Publisher extends sequelize_1.Model {
}
exports.Publisher = Publisher;
Publisher.init(exports.attr, {
    sequelize: databaseProvider_1.default,
    tableName: "Publisher",
    timestamps: false,
    modelName: "Publisher",
});
Publisher.hasMany(book_1.Book, {
    foreignKey: "publisher_id",
});
book_1.Book.belongsTo(Publisher, { foreignKey: "publisher_id" });
