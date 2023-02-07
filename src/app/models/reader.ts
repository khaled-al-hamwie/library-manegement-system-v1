import sequelize, { DataTypes, Model, Sequelize } from "sequelize";

export const name: string = "Reader";
export const attr = {
    reader_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
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

export const Reader = (sequelize: Sequelize) => {
    class Reader extends Model {}
    Reader.init(attr, {
        sequelize,
        tableName: "Reader",
        timestamps: false,
        modelName: "Reader",
    });
    return Reader;
};
