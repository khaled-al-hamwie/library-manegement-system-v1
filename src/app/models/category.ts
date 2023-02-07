// import inflection from "inflection";
import sequelize, { DataTypes, Model, Sequelize } from "sequelize";

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

export const Category = (sequelize: Sequelize) => {
    class Category extends Model {}
    Category.init(attr, {
        sequelize,
        tableName: "Publisher",
        timestamps: false,
        modelName: "Publisher",
    });
    return Category;
};
