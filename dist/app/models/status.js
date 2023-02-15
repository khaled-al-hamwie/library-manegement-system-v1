"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.attr = exports.name = void 0;
const sequelize_1 = require("sequelize");
const databaseProvider_1 = __importDefault(require("../providers/databaseProvider"));
const book_1 = require("./book");
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
        unique: true,
    },
};
class Status extends sequelize_1.Model {
}
exports.Status = Status;
Status.init(exports.attr, {
    sequelize: databaseProvider_1.default,
    tableName: "Status",
    timestamps: false,
    modelName: "Status",
});
Status.hasMany(book_1.Book, {
    foreignKey: "status_id",
});
book_1.Book.belongsTo(Status, { foreignKey: "status_id" });
