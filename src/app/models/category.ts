// import inflection from "inflection";
import {
    DataTypes,
    InferCreationAttributes,
    Model,
    Sequelize,
} from "sequelize";
import sequelize from "../providers/databaseProvider";
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

export class Category extends Model<any, InferCreationAttributes<Category>> {
    declare name: string;
    declare description: string;
}

Category.init(attr, {
    sequelize,
    tableName: "Category",
    timestamps: false,
    modelName: "Category",
});
