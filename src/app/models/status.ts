import sequelize, { DataTypes, Model, Sequelize } from "sequelize";

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
    },
};

export const Status = (sequelize: Sequelize) => {
    class Status extends Model {}
    Status.init(attr, {
        sequelize,
        tableName: "Status",
        timestamps: false,
        modelName: "Status",
    });
    return Status;
};
