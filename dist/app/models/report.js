"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = exports.attr = exports.name = void 0;
const sequelize_1 = require("sequelize");
const databaseProvider_1 = __importDefault(require("../providers/databaseProvider"));
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
class Report extends sequelize_1.Model {
}
exports.Report = Report;
Report.init(exports.attr, {
    sequelize: databaseProvider_1.default,
    tableName: "Report",
    timestamps: false,
    modelName: "Report",
});
