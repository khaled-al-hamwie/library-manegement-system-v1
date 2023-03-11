import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../providers/databaseProvider";
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
interface ReportAttributes {
    report_id: number;
    book_id: number;
    reader_id: number;
    staff_id: number;
    issue_id: number;
    reservation_id?: number;
    payment_id?: number;
    report?: string;
    date: Date;
}
interface ReportInput extends Optional<ReportAttributes, "report_id"> {}
export class Report
    extends Model<ReportAttributes, ReportInput>
    implements ReportAttributes
{
    public report_id!: number;
    public book_id!: number;
    public reader_id!: number;
    public staff_id!: number;
    public issue_id!: number;
    public reservation_id?: number | undefined;
    public payment_id?: number | undefined;
    public date!: Date;
}
Report.init(attr, {
    sequelize,
    tableName: "Report",
    timestamps: false,
    modelName: "Report",
});
