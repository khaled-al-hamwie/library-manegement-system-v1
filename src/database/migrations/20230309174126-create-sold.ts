"use strict";

import { DataType, Model, QueryInterface, Sequelize } from "sequelize";
import { attr, name } from "../../app/models/sold";

export = {
    async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
        await queryInterface.createTable(name, attr);
    },
    async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
        await queryInterface.dropTable(name);
    },
};
