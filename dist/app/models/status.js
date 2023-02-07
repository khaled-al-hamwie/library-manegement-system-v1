"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.attr = exports.name = void 0;
const sequelize_1 = require("sequelize");
exports.name = "Status";
exports.attr = {
    status_id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.TINYINT,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
};
const Status = (sequelize) => {
    class Status extends sequelize_1.Model {
    }
    Status.init(exports.attr, {
        sequelize,
        tableName: "Status",
        timestamps: false,
        modelName: "Status",
    });
    return Status;
};
exports.Status = Status;
