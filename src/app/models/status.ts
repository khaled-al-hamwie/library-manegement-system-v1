import {
    CreationOptional,
    DataTypes,
    HasManyCountAssociationsMixin,
    HasManyGetAssociationsMixin,
    HasManyHasAssociationMixin,
    InferCreationAttributes,
    Model,
    TinyIntegerDataType,
} from "sequelize";
import sequelize from "../providers/databaseProvider";
import { Book } from "./book";
export const name: string = "Status";
export const attr = {
    status_id: {
        primaryKey: true,
        type: DataTypes.TINYINT,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
    },
};

export class Status extends Model<any, InferCreationAttributes<Status>> {
    declare status_id: CreationOptional<TinyIntegerDataType>;
    declare name: string;

    declare getBooks: HasManyGetAssociationsMixin<Book>;
    declare countBooks: HasManyCountAssociationsMixin;
    declare hasBook: HasManyHasAssociationMixin<Book, Book>;
}
Status.init(attr, {
    sequelize,
    tableName: "Status",
    timestamps: false,
    modelName: "Status",
});

Status.hasMany(Book, {
    foreignKey: "status_id",
});

Book.belongsTo(Status, { foreignKey: "status_id" });
