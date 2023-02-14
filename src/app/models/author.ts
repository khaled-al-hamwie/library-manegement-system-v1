import {
    CreationOptional,
    DataTypes,
    DateOnlyDataType,
    HasManyCountAssociationsMixin,
    HasManyGetAssociationsMixin,
    HasManyHasAssociationMixin,
    InferCreationAttributes,
    MediumIntegerDataType,
    Model,
    Sequelize,
} from "sequelize";
import sequelize from "../providers/databaseProvider";
import { Book } from "./book";

export const name: string = "Author";
export const attr = {
    author_id: {
        primaryKey: true,
        type: DataTypes.MEDIUMINT,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(245),
    },
    born: DataTypes.DATEONLY,
};

export class Author extends Model<any, InferCreationAttributes<Author>> {
    declare author_id: CreationOptional<MediumIntegerDataType>;
    declare name: string;
    declare description: CreationOptional<string>;
    declare born: CreationOptional<DateOnlyDataType>;

    declare getBooks: HasManyGetAssociationsMixin<Book>;
    declare countBooks: HasManyCountAssociationsMixin;
    declare hasBook: HasManyHasAssociationMixin<Book, Book>;
}
Author.init(attr, {
    sequelize,
    tableName: "Author",
    timestamps: false,
    modelName: "Author",
});

Author.hasMany(Book, { foreignKey: "author_id" });
Book.belongsTo(Author, { foreignKey: "author_id" });
