import {
    DataTypes,
    InferCreationAttributes,
    Model,
    Sequelize,
} from "sequelize";
import sequelize from "../providers/databaseProvider";
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

export class Status extends Model<any, InferCreationAttributes<Status>> {
    declare name: string;
}
Status.init(attr, {
    sequelize,
    tableName: "Status",
    timestamps: false,
    modelName: "Status",
});
