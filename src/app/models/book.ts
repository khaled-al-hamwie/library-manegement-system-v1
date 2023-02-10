// import inflection from "inflection";
import sequelize, {
    DataTypes,
    Model,
    ModelAttributeColumnOptions,
    Sequelize,
} from "sequelize";

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
    reservation_daily_value: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    Image: DataTypes.BLOB,
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

export const Book = (sequelize: Sequelize) => {
    class Book extends Model {}
    Book.init(
        { ...attr, status_id: status.attr },
        {
            sequelize,
            tableName: "Book",
            timestamps: false,
            modelName: "Book",
        }
    );
    return Book;
};
