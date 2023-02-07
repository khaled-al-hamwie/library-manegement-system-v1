"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reader = exports.attr = exports.name = void 0;
const sequelize_1 = require("sequelize");
exports.name = "Reader";
exports.attr = {
    reader_id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
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
const Reader = (sequelize) => {
    class Reader extends sequelize_1.Model {
    }
    Reader.init(exports.attr, {
        sequelize,
        tableName: "Reader",
        timestamps: false,
        modelName: "Reader",
    });
    return Reader;
};
exports.Reader = Reader;
