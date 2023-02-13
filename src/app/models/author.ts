import {
    CreationOptional,
    DataTypes,
    DateOnlyDataType,
    InferCreationAttributes,
    Model,
    Sequelize,
} from "sequelize";
import sequelize from "../providers/databaseProvider";

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
    declare name: string;
    declare description: CreationOptional<string>;
    declare born: CreationOptional<DateOnlyDataType>;
}
Author.init(attr, {
    sequelize,
    tableName: "Author",
    timestamps: false,
    modelName: "Author",
});
