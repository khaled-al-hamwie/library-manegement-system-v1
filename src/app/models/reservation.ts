import sequelize, { DataTypes, Model, Sequelize } from "sequelize";

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

export const Reservation = (sequelize: Sequelize) => {
    class Reservation extends Model {}
    Reservation.init(attr, {
        sequelize,
        tableName: "Reservation",
        timestamps: false,
        modelName: "Reservation",
    });
    return Reservation;
};
