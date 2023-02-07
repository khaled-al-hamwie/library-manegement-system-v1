import sequelize, { DataTypes, Model, Sequelize } from "sequelize";

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
        allowNull: true,
    },
    born: DataTypes.DATE,
};

export const Author = (sequelize: Sequelize) => {
    class Author extends Model {}
    Author.init(attr, {
        sequelize,
        tableName: "Author",
        timestamps: false,
        modelName: "Author",
    });
    return Author;
};
