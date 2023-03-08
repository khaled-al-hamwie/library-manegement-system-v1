"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = exports.attr = exports.name = void 0;
const sequelize_1 = require("sequelize");
const databaseProvider_1 = __importDefault(require("../providers/databaseProvider"));
exports.name = "Reservation";
exports.attr = {
    reservation_id: {
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
    reader_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Reader",
            key: "reader_id",
        },
    },
    staff_id: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false,
        references: {
            model: "Staff",
            key: "staff_id",
        },
    },
    reservation_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    return_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
};
class Reservation extends sequelize_1.Model {
}
exports.Reservation = Reservation;
Reservation.init(exports.attr, {
    sequelize: databaseProvider_1.default,
    tableName: "Reservation",
    timestamps: false,
    modelName: "Reservation",
});
