"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reader = exports.attr = exports.name = void 0;
const sequelize_1 = require("sequelize");
const databaseProvider_1 = __importDefault(require("../providers/databaseProvider"));
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
class Reader extends sequelize_1.Model {
}
exports.Reader = Reader;
Reader.init(exports.attr, {
    sequelize: databaseProvider_1.default,
    tableName: "Reader",
    timestamps: false,
    modelName: "Reader",
});
