"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = exports.attr = exports.name = void 0;
const sequelize_1 = require("sequelize");
exports.name = "Payment";
exports.attr = {
    payment_id: {
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
    payment_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
};
const Payment = (sequelize) => {
    class Payment extends sequelize_1.Model {
    }
    Payment.init(exports.attr, {
        sequelize,
        tableName: "Payment",
        timestamps: false,
        modelName: "Payment",
    });
    return Payment;
};
exports.Payment = Payment;
