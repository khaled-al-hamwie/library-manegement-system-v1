import {
    BigIntDataType,
    CreationOptional,
    DataTypes,
    ForeignKey,
    InferCreationAttributes,
    Model,
} from "sequelize";
import sequelize from "../providers/databaseProvider";
import { Book } from "./book";
import { Reader } from "./reader";
import { Staff } from "./staff";

export const name: string = "Payment";
export const attr = {
    payment_id: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
    },
    reader_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Reader",
            key: "reader_id",
        },
    },
    staff_id: {
        type: DataTypes.TINYINT,
        allowNull: false,
        references: {
            model: "Staff",
            key: "staff_id",
        },
    },
    payment_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    payment_total: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false,
        validate: {
            min: 0,
        },
    },
};

export class Payment extends Model<any, InferCreationAttributes<Payment>> {
    declare payment_id: CreationOptional<BigIntDataType>;
    declare reader_id: ForeignKey<Reader["reader_id"]>;
    declare staff_id: ForeignKey<Staff["staff_id"]>;
    declare payment_date: string;
    declare payment_total: number;
}
Payment.init(attr, {
    sequelize,
    tableName: "Payment",
    timestamps: false,
    modelName: "Payment",
});
