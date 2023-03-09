"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sold = exports.attr = exports.name = void 0;
const sequelize_1 = require("sequelize");
const databaseProvider_1 = __importDefault(require("../providers/databaseProvider"));
exports.name = "Sold";
exports.attr = {
    sold_id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
    },
    book_id: {
        type: sequelize_1.DataTypes.MEDIUMINT,
        allowNull: false,
        references: {
            model: "Book",
            key: "book_id",
        },
    },
    payment_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: "Payment",
            key: "payment_id",
        },
    },
};
class Sold extends sequelize_1.Model {
}
exports.Sold = Sold;
Sold.init(exports.attr, {
    sequelize: databaseProvider_1.default,
    tableName: "Sold",
    timestamps: false,
    modelName: "Sold",
});
