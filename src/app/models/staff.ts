import {
    BigIntDataType,
    CreationOptional,
    DataTypes,
    HasOneGetAssociationMixin,
    HasOneSetAssociationMixin,
    InferCreationAttributes,
    IntegerDataType,
    Model,
} from "sequelize";
import sequelize from "../providers/databaseProvider";
export const name: string = "Staff";
export const attr = {
    staff_id: {
        primaryKey: true,
        type: DataTypes.TINYINT,
        autoIncrement: true,
        allowNull: false,
    },
    credential_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: "Credential",
            key: "credential_id",
        },
    },
    first_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING(12),
        allowNull: false,
    },
};

export class Staff extends Model<any, InferCreationAttributes<Staff>> {
    declare staff_id: CreationOptional<IntegerDataType>;
    declare credential_id: BigIntDataType;
    declare first_name: string;
    declare last_name: string;
    declare address: string;
    declare phone_number: string;

    declare setCredential: HasOneSetAssociationMixin<Credential, Credential>;
    declare getCredential: HasOneGetAssociationMixin<Credential>;
}
Staff.init(attr, {
    sequelize,
    tableName: "Staff",
    timestamps: false,
    modelName: "Staff",
});
