import sequelize, { DataTypes, Model, Sequelize } from "sequelize";

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

export const Payment = (sequelize: Sequelize) => {
    class Payment extends Model {}
    Payment.init(attr, {
        sequelize,
        tableName: "Payment",
        timestamps: false,
        modelName: "Payment",
    });
    return Payment;
};
