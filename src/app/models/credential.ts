// import inflection from "inflection";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import {
    BigIntDataType,
    CreateOptions,
    CreationOptional,
    DataTypes,
    HasOneGetAssociationMixin,
    InferCreationAttributes,
    Model,
} from "sequelize";
import sequelize from "../providers/databaseProvider";
import { Reader } from "./reader";
import { Staff } from "./staff";
export const name: string = "Credential";
export const attr = {
    credential_id: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(245),
        allowNull: false,
        validate: {
            min: 8,
        },
    },
    tokens: {
        type: DataTypes.JSON,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
    },
};

export class Credential extends Model<
    any,
    InferCreationAttributes<Credential>
> {
    declare credential_id: CreationOptional<BigIntDataType>;
    declare email: string;
    declare password: string;

    declare tokens: CreationOptional<string>;
    declare isAdmin: CreationOptional<boolean>;

    declare getReader: HasOneGetAssociationMixin<Reader>;
    declare getStaff: HasOneGetAssociationMixin<Staff>;
}
Credential.init(attr, {
    sequelize,
    tableName: "Credential",
    timestamps: false,
    modelName: "Credential",
});
Credential.addHook("beforeCreate", async (credential: Credential, options) => {
    const password = await hash(credential.password, 12);

    credential.set("password", password);
});
Credential.addHook("afterCreate", async (credential: Credential, options) => {
    const token = sign(
        {
            id: credential.credential_id,
            isAdmin: credential.isAdmin,
        },
        process.env.JWT_SECRET!
    );
    credential.set("tokens", [token]);
    await credential.save();
});
// Credential.belongsTo(Reader, { foreignKey: "credential_id" });
// Credential.belongsTo(Staff, { foreignKey: "staff_id" });
