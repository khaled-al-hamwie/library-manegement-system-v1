"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Issue = exports.attr = exports.name = void 0;
const sequelize_1 = require("sequelize");
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
const Issue = (sequelize) => {
    class Issue extends sequelize_1.Model {
    }
    Issue.init(exports.attr, {
        sequelize,
        tableName: "Issue",
        timestamps: false,
        modelName: "Issue",
    });
    return Issue;
};
exports.Issue = Issue;
