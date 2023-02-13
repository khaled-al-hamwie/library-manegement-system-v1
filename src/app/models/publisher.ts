// import inflection from "inflection";
import {
    DataTypes,
    DateOnlyDataType,
    InferCreationAttributes,
    Model,
    Sequelize,
} from "sequelize";
import sequelize from "../providers/databaseProvider";

export const name: string = "Publisher";
export const attr = {
    publisher_id: {
        primaryKey: true,
        type: DataTypes.SMALLINT,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    year_of_publish: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
};

export class Publisher extends Model<any, InferCreationAttributes<Publisher>> {
    declare name: string;
    declare year_of_publish: DateOnlyDataType;
}
Publisher.init(attr, {
    sequelize,
    tableName: "Publisher",
    timestamps: false,
    modelName: "Publisher",
});
