import sequelize, { DataTypes, Model, Sequelize } from "sequelize";

export const name: string = "Report";
export const attr = {
    report_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
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
    issue_id: {
        type: DataTypes.TINYINT,
        allowNull: false,
        references: {
            model: "Issue",
            key: "issue_id",
        },
    },
    reservation_id: {
        type: DataTypes.BIGINT,
        references: {
            model: "Reservation",
            key: "reservation_id",
        },
    },
    payment_id: {
        type: DataTypes.BIGINT,
        references: {
            model: "Payment",
            key: "payment_id",
        },
    },
    report: {
        type: DataTypes.STRING(245),
        allowNull: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
};

export const Report = (sequelize: Sequelize) => {
    class Report extends Model {}
    Report.init(attr, {
        sequelize,
        tableName: "Report",
        timestamps: false,
        modelName: "Report",
    });
    return Report;
};
