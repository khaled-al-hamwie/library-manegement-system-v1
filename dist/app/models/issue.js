"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Issue = exports.attr = exports.name = void 0;
const sequelize_1 = require("sequelize");
const databaseProvider_1 = __importDefault(require("../providers/databaseProvider"));
exports.name = "Issue";
exports.attr = {
    issue_id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.TINYINT,
        autoIncrement: true,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING(245),
        allowNull: true,
    },
};
class Issue extends sequelize_1.Model {
}
exports.Issue = Issue;
Issue.init(exports.attr, {
    sequelize: databaseProvider_1.default,
    tableName: "Issue",
    timestamps: false,
    modelName: "Issue",
});
