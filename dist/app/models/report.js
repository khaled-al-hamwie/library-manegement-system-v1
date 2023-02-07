"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = exports.attr = exports.name = void 0;
const sequelize_1 = require("sequelize");
exports.name = "Report";
exports.attr = {
    report_id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
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
    issue_id: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false,
        references: {
            model: "Issue",
            key: "issue_id",
        },
    },
    reservation_id: {
        type: sequelize_1.DataTypes.BIGINT,
        references: {
            model: "Reservation",
            key: "reservation_id",
        },
    },
    payment_id: {
        type: sequelize_1.DataTypes.BIGINT,
        references: {
            model: "Payment",
            key: "payment_id",
        },
    },
    report: {
        type: sequelize_1.DataTypes.STRING(245),
        allowNull: true,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
};
const Report = (sequelize) => {
    class Report extends sequelize_1.Model {
    }
    Report.init(exports.attr, {
        sequelize,
        tableName: "Report",
        timestamps: false,
        modelName: "Report",
    });
    return Report;
};
exports.Report = Report;
