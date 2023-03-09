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
    book_id: {
        type: DataTypes.MEDIUMINT,
        allowNull: false,
        references: {
            model: "Book",
            key: "book_id",
        },
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
};

export class Payment extends Model<any, InferCreationAttributes<Payment>> {
    declare payment_id: CreationOptional<BigIntDataType>;
    declare book_id: ForeignKey<Book["book_id"]>;
    declare reader_id: ForeignKey<Reader["reader_id"]>;
    declare staff_id: ForeignKey<Staff["staff_id"]>;
    declare payment_date: string;
}
Payment.init(attr, {
    sequelize,
    tableName: "Payment",
    timestamps: false,
    modelName: "Payment",
});
