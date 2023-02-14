"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.status = exports.attr = exports.name = void 0;
// import inflection from "inflection";
const sequelize_1 = require("sequelize");
const databaseProvider_1 = __importDefault(require("../providers/databaseProvider"));
exports.name = "Book";
exports.attr = {
    book_id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.MEDIUMINT,
        autoIncrement: true,
        allowNull: false,
    },
    category_id: {
        type: sequelize_1.DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: "Category",
            key: "category_id",
        },
    },
    author_id: {
        type: sequelize_1.DataTypes.MEDIUMINT,
        allowNull: false,
        references: {
            model: "Author",
            key: "author_id",
        },
    },
    publisher_id: {
        type: sequelize_1.DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: "Publisher",
            key: "publisher_id",
        },
    },
    title: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING(245),
        allowNull: false,
    },
    edition: {
        type: sequelize_1.DataTypes.STRING(45),
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL(9, 2),
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    reservation_daily_value: {
        type: sequelize_1.DataTypes.DECIMAL(9, 2),
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    image: sequelize_1.DataTypes.BLOB,
};
exports.status = {
    name: "status_id",
    attr: {
        type: sequelize_1.DataTypes.TINYINT,
        after: "publisher_id",
        allowNull: false,
        references: {
            model: "Status",
            key: "status_id",
        },
    },
};
class Book extends sequelize_1.Model {
}
exports.Book = Book;
Book.init(Object.assign(Object.assign({}, exports.attr), { status_id: exports.status.attr }), {
    sequelize: databaseProvider_1.default,
    tableName: "Book",
    timestamps: false,
    modelName: "Book",
});
