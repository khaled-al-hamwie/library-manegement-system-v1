"use strict";

import {
    DataType,
    DataTypes,
    Model,
    QueryInterface,
    Sequelize,
} from "sequelize";
import { name, status } from "../../app/models/book";

export = {
    async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
        await queryInterface.addColumn(name, status.name, status.attr);
    },
    async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
        await queryInterface.removeColumn(name, status.name);
    },
};
