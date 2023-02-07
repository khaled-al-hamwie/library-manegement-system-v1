import sequelize, { DataTypes, Model, Sequelize } from "sequelize";

export const name: string = "Issue";
export const attr = {
    issue_id: {
        primaryKey: true,
        type: DataTypes.TINYINT,
        autoIncrement: true,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(245),
        allowNull: true,
    },
};

export const Issue = (sequelize: Sequelize) => {
    class Issue extends Model {}
    Issue.init(attr, {
        sequelize,
        tableName: "Issue",
        timestamps: false,
        modelName: "Issue",
    });
    return Issue;
};
