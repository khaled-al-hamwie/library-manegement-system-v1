// import inflection from "inflection";
import {
    Association,
    CreationOptional,
    DataTypes,
    HasManyCountAssociationsMixin,
    HasManyGetAssociationsMixin,
    HasManyHasAssociationMixin,
    InferCreationAttributes,
    Model,
    Sequelize,
    SmallIntegerDataType,
} from "sequelize";
import sequelize from "../providers/databaseProvider";
import { Book } from "./book";
export const name: string = "Category";
export const attr = {
    category_id: {
        primaryKey: true,
        type: DataTypes.SMALLINT,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(245),
        allowNull: true,
    },
};
interface categoryAttributes {
    category_id: CreationOptional<SmallIntegerDataType>;
    name: string;
    description: string;
}
export class Category extends Model<any, InferCreationAttributes<Category>> {
    declare category_id: CreationOptional<SmallIntegerDataType>;
    declare name: string;
    declare description: string;

    declare getBooks: HasManyGetAssociationsMixin<Book>;
    declare countBooks: HasManyCountAssociationsMixin;
    declare hasBook: HasManyHasAssociationMixin<Book, Book>;
}
Category.init(attr, {
    sequelize,
    tableName: "Category",
    timestamps: false,
    modelName: "Category",
});

Category.hasMany(Book, {
    foreignKey: "category_id",
});

Book.belongsTo(Category, { foreignKey: "category_id" });
