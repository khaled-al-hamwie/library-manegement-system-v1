"use strict";
import { Op, QueryInterface, Sequelize } from "sequelize";
/** @type {import('sequelize-cli').Migration} */
export = {
    async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
        await queryInterface.bulkInsert("Status", [
            {
                status_id: 1,
                name: "sold",
            },
            {
                status_id: 2,
                name: "available",
            },
            {
                status_id: 3,
                name: "rented",
            },
        ]);
    },

    async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
        return queryInterface.bulkDelete("Status", {
            category_id: { [Op.between]: [1, 3] },
        });
    },
};
