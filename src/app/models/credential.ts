// import inflection from "inflection";
import sequelize, { DataTypes, Model, Sequelize } from "sequelize";

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

export const Credential = (sequelize: Sequelize) => {
    class Credential extends Model {}
    Credential.init(attr, {
        sequelize,
        tableName: "Publisher",
        timestamps: false,
        modelName: "Publisher",
    });
    return Credential;
};
