"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credential = exports.attr = exports.name = void 0;
// import inflection from "inflection";
const sequelize_1 = require("sequelize");
exports.name = "Credential";
exports.attr = {
    credential_id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING(245),
        allowNull: false,
        validate: {
            min: 8,
        },
    },
    tokens: {
        type: sequelize_1.DataTypes.JSON,
    },
    isAdmin: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
    },
};
const Credential = (sequelize) => {
    class Credential extends sequelize_1.Model {
    }
    Credential.init(exports.attr, {
        sequelize,
        tableName: "Publisher",
        timestamps: false,
        modelName: "Publisher",
    });
    return Credential;
};
exports.Credential = Credential;
