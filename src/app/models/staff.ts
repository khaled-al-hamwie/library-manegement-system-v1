import { DataTypes, Model } from "sequelize";
import sequelize from "../providers/databaseProvider";
export const name: string = "Staff";
export const attr = {
    staff_id: {
        primaryKey: true,
        type: DataTypes.TINYINT,
        autoIncrement: true,
        allowNull: false,
    },
    credential_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: "Credential",
            key: "credential_id",
        },
    },
    first_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING(12),
        allowNull: false,
    },
};

export class Staff extends Model {}
Staff.init(attr, {
    sequelize,
    tableName: "Staff",
    timestamps: false,
    modelName: "Staff",
});
