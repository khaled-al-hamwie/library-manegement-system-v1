"use strict";
import { Op, QueryInterface, Sequelize } from "sequelize";
import RegisterController from "../../app/controllers/registerController";
/** @type {import('sequelize-cli').Migration} */
export = {
    async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
        await queryInterface.bulkInsert("Staff", [
            {
                staff_id: 1,
                credential_id: 2,
                first_name: "admin",
                last_name: "your boy",
                address: "unknown",
                phone_number: "011104",
            },
        ]);
    },
    // 1234
    // await RegisterController.register("test@test.com", "1234", true);
    async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
        return queryInterface.bulkDelete("Staff", {
            staff_id: 1,
        });
    },
};
