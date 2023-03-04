"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credential = exports.attr = exports.name = void 0;
// import inflection from "inflection";
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const sequelize_1 = require("sequelize");
const databaseProvider_1 = __importDefault(require("../providers/databaseProvider"));
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
class Credential extends sequelize_1.Model {
}
exports.Credential = Credential;
Credential.init(exports.attr, {
    sequelize: databaseProvider_1.default,
    tableName: "Credential",
    timestamps: false,
    modelName: "Credential",
});
Credential.addHook("beforeCreate", (credential, options) => __awaiter(void 0, void 0, void 0, function* () {
    const password = yield (0, bcryptjs_1.hash)(credential.password, 12);
    const token = (0, jsonwebtoken_1.sign)({
        id: credential.credential_id,
        isAdmin: credential.isAdmin,
        email: credential.email,
    }, process.env.JWT_SECRET);
    credential.set("password", password);
    credential.set("tokens", [token]);
}));
// Credential.belongsTo(Reader, { foreignKey: "credential_id" });
// Credential.belongsTo(Staff, { foreignKey: "staff_id" });
