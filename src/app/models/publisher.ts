// import inflection from "inflection";
import sequelize, { DataTypes, Model, Sequelize } from "sequelize";

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
    year_of_publish: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
};

export const Publisher = (sequelize: Sequelize) => {
    class Product extends Model {}
    Product.init(attr, {
        sequelize,
        tableName: "Publisher",
        timestamps: false,
        modelName: "Publisher",
    });
    return Product;
};
