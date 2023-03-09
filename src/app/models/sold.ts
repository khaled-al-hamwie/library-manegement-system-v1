import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../providers/databaseProvider";
export const name: string = "Sold";
export const attr = {
    sold_id: {
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
    payment_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: "Payment",
            key: "payment_id",
        },
    },
};
interface SoldAttributes {
    sold_id: number;
    book_id: number;
    payment_id: number;
}
interface SoldInput extends Optional<SoldAttributes, "sold_id"> {}
interface SoldOutput extends Required<SoldAttributes> {}
export class Sold
    extends Model<SoldAttributes, SoldInput>
    implements SoldAttributes
{
    public sold_id!: number;
    public book_id!: number;
    public payment_id!: number;
}
Sold.init(attr, {
    sequelize,
    tableName: "Sold",
    timestamps: false,
    modelName: "Sold",
});
