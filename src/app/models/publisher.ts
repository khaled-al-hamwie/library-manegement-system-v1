// import inflection from "inflection";
import {
    CreationOptional,
    DataTypes,
    DateOnlyDataType,
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

export const name: string = "Publisher";
export const attr = {
    publisher_id: {
        primaryKey: true,
        type: DataTypes.SMALLINT,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    publishing_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
};

export class Publisher extends Model<any, InferCreationAttributes<Publisher>> {
    declare publisher_id: CreationOptional<SmallIntegerDataType>;
    declare name: string;
    declare publishing_date: DateOnlyDataType;

    declare getBooks: HasManyGetAssociationsMixin<Book>;
    declare countBooks: HasManyCountAssociationsMixin;
    declare hasBook: HasManyHasAssociationMixin<Book, Book>;
}
Publisher.init(attr, {
    sequelize,
    tableName: "Publisher",
    timestamps: false,
    modelName: "Publisher",
});

Publisher.hasMany(Book, {
    foreignKey: "publisher_id",
});

Book.belongsTo(Publisher, { foreignKey: "publisher_id" });
