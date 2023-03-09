import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../providers/databaseProvider";
export const name: string = "Issue";
export const attr = {
    issue_id: {
        primaryKey: true,
        type: DataTypes.TINYINT,
        autoIncrement: true,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(245),
        allowNull: true,
    },
};
interface IssueAttributes {
    issue_id: number;
    type: string;
    description?: string;
}
interface IssueInput extends Optional<IssueAttributes, "issue_id"> {}
interface IssueOutput extends Required<IssueAttributes> {}
export class Issue
    extends Model<IssueAttributes, IssueInput>
    implements IssueAttributes
{
    public issue_id!: number;
    public type!: string;
    public description!: string;
}
Issue.init(attr, {
    sequelize,
    tableName: "Issue",
    timestamps: false,
    modelName: "Issue",
});
