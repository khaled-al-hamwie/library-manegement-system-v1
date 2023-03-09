"use strict";
import { Op, QueryInterface, Sequelize } from "sequelize";
import RegisterController from "../../app/controllers/registerController";
/** @type {import('sequelize-cli').Migration} */
export = {
    async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
        await queryInterface.bulkInsert("Credential", [
            {
                credential_id: 2,
                email: "test@test.com",
                password:
                    "$2a$12$i4I28Uchw1s1vwTzzbgrLOLB5BHSxT/OlX.gsHeFmi3Jci.lgIDpG",
                tokens: '["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjc4Mzk0NTAwfQ.izJut-v-P7MsAjo4ttlu3CZEEY50ljmwDXrJxX--FfU"]',
                isAdmin: 1,
            },
        ]);
    },
    // await RegisterController.register("test@test.com", "12312121212121212345", true);
    async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
        return queryInterface.bulkDelete("Credential", {
            credential_id: 2,
        });
    },
};
