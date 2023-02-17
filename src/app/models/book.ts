// import inflection from "inflection";
import {
    BelongsToGetAssociationMixin,
    BlobDataType,
    CreationOptional,
    DataTypes,
    ForeignKey,
    InferCreationAttributes,
    MediumIntegerDataType,
    Model,
} from "sequelize";
import sequelize from "../providers/databaseProvider";
import { Author } from "./author";
import { Category } from "./category";
import { Publisher } from "./publisher";
import { Status } from "./status";
export const name: string = "Book";
export const attr = {
    book_id: {
        primaryKey: true,
        type: DataTypes.MEDIUMINT,
        autoIncrement: true,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: "Category",
            key: "category_id",
        },
    },
    author_id: {
        type: DataTypes.MEDIUMINT,
        allowNull: false,
        references: {
            model: "Author",
            key: "author_id",
        },
    },
    publisher_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        references: {
            model: "Publisher",
            key: "publisher_id",
        },
    },
    title: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(245),
        allowNull: false,
    },
    edition: {
        type: DataTypes.STRING(45),
    },
    price: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    reservation_price: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    image: DataTypes.STRING(245),
};
export const status = {
    name: "status_id",
    attr: {
        type: DataTypes.TINYINT,
        after: "publisher_id",
        allowNull: false,
        references: {
            model: "Status",
            key: "status_id",
        },
    },
};

export class Book extends Model<any, InferCreationAttributes<Book>> {
    declare book_id: CreationOptional<MediumIntegerDataType>;
    declare category_id: ForeignKey<Category["category_id"]>;
    declare author_id: ForeignKey<Author["author_id"]>;
    declare publisher_id: ForeignKey<Publisher["publisher_id"]>;
    declare status_id: ForeignKey<Status["status_id"]>;
    declare title: string;
    declare description: string;
    declare edition: string;
    declare price: number;
    declare reservation_price: number;
    declare image: CreationOptional<string> | null;

    // declare
    declare getCategory: BelongsToGetAssociationMixin<Category>;
    declare getPublisher: BelongsToGetAssociationMixin<Publisher>;
    declare getAuthor: BelongsToGetAssociationMixin<Author>;
    declare getStatus: BelongsToGetAssociationMixin<Status>;
}

Book.init(
    { ...attr, status_id: status.attr },
    {
        sequelize,
        tableName: "Book",
        timestamps: false,
        modelName: "Book",
    }
);
