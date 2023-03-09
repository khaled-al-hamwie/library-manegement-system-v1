"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = exports.attr = exports.name = void 0;
const sequelize_1 = require("sequelize");
const databaseProvider_1 = __importDefault(require("../providers/databaseProvider"));
exports.name = "Payment";
exports.attr = {
    payment_id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
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
    payment_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    payment_total: {
        type: sequelize_1.DataTypes.DECIMAL(9, 2),
        allowNull: false,
        validate: {
            min: 0,
        },
    },
};
class Payment extends sequelize_1.Model {
}
exports.Payment = Payment;
Payment.init(exports.attr, {
    sequelize: databaseProvider_1.default,
    tableName: "Payment",
    timestamps: false,
    modelName: "Payment",
});
