"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = exports.attr = exports.name = void 0;
const sequelize_1 = require("sequelize");
exports.name = "Staff";
exports.attr = {
    staff_id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.TINYINT,
        autoIncrement: true,
        allowNull: false,
    },
    credential_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: "Credential",
            key: "credential_id",
        },
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    phone_number: {
        type: sequelize_1.DataTypes.STRING(12),
        allowNull: false,
    },
};
const Staff = (sequelize) => {
    class Staff extends sequelize_1.Model {
    }
    Staff.init(exports.attr, {
        sequelize,
        tableName: "Staff",
        timestamps: false,
        modelName: "Staff",
    });
    return Staff;
};
exports.Staff = Staff;
