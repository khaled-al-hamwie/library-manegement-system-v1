import {
    BigIntDataType,
    CreationOptional,
    DataTypes,
    DateDataType,
    ForeignKey,
    InferCreationAttributes,
    Model,
} from "sequelize";
import sequelize from "../providers/databaseProvider";
import { Book } from "./book";
import { Reader } from "./reader";
import { Staff } from "./staff";
export const name: string = "Reservation";
export const attr = {
    reservation_id: {
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
    reservation_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    return_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
};

export class Reservation extends Model<
    any,
    InferCreationAttributes<Reservation>
> {
    declare reservation_id: CreationOptional<BigIntDataType>;
    declare book_id: ForeignKey<Book["book_id"]>;
    declare reader_id: ForeignKey<Reader["reader_id"]>;
    declare staff_id: ForeignKey<Staff["staff_id"]>;
    declare reservation_date: string;
    declare return_date: string;
}
Reservation.init(attr, {
    sequelize,
    tableName: "Reservation",
    timestamps: false,
    modelName: "Reservation",
});
