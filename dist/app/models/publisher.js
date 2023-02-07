"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = exports.attr = exports.name = void 0;
// import inflection from "inflection";
const sequelize_1 = require("sequelize");
exports.name = "Publisher";
exports.attr = {
    publisher_id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.SMALLINT,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    year_of_publish: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
};
const Publisher = (sequelize) => {
    class Product extends sequelize_1.Model {
    }
    Product.init(exports.attr, {
        sequelize,
        tableName: "Publisher",
        timestamps: false,
        modelName: "Publisher",
    });
    return Product;
};
exports.Publisher = Publisher;
