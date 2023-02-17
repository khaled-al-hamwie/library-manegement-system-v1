"use strict";
import { DataType, Model, Op, QueryInterface, Sequelize } from "sequelize";
import { Category } from "../../app/models/category";
/** @type {import('sequelize-cli').Migration} */
export = {
    async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
        await queryInterface.bulkInsert("Category", [
            {
                category_id: 1,
                name: "romance",
                description: "lorm lorm",
            },
            {
                category_id: 2,
                name: "fiction",
                description: "lorm lorm",
            },
            {
                category_id: 3,
                name: "young-adult",
                description: "lorm lorm",
            },
            {
                category_id: 4,
                name: "fantasy",
                description: "lorm lorm",
            },
            {
                category_id: 5,
                name: "science-fiction",
                description: "lorm lorm",
            },
            {
                category_id: 6,
                name: "non-fiction",
                description: "lorm lorm",
            },
            {
                category_id: 7,
                name: "children",
                description: "lorm lorm",
            },
            {
                category_id: 8,
                name: "history",
                description: "lorm lorm",
            },
            {
                category_id: 9,
                name: "mystery",
                description: "lorm lorm",
            },
            {
                category_id: 10,
                name: "covers",
                description: "lorm lorm",
            },
            {
                category_id: 11,
                name: "historical-fiction",
                description: "lorm lorm",
            },
            {
                category_id: 12,
                name: "best",
                description: "lorm lorm",
            },
            {
                category_id: 13,
                name: "titles",
                description: "lorm lorm",
            },
            {
                category_id: 14,
                name: "paranormal",
                description: "lorm lorm",
            },
            {
                category_id: 15,
                name: "love",
                description: "lorm lorm",
            },
            {
                category_id: 16,
                name: "middle-grade",
                description: "lorm lorm",
            },
            {
                category_id: 17,
                name: "contemporary",
                description: "lorm lorm",
            },
            {
                category_id: 18,
                name: "historical-romance",
                description: "lorm lorm",
            },
            {
                category_id: 19,
                name: "thriller",
                description: "lorm lorm",
            },
            {
                category_id: 20,
                name: "nonfiction",
                description: "lorm lorm",
            },
            {
                category_id: 21,
                name: "biography",
                description: "lorm lorm",
            },
            {
                category_id: 22,
                name: "women",
                description: "lorm lorm",
            },
            {
                category_id: 23,
                name: "series",
                description: "lorm lorm",
            },
            {
                category_id: 24,
                name: "classics",
                description: "lorm lorm",
            },
            {
                category_id: 25,
                name: "graphic-novels",
                description: "lorm lorm",
            },
            {
                category_id: 26,
                name: "memoir",
                description: "lorm lorm",
            },
        ]);
    },

    async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
        return queryInterface.bulkDelete("Category", {
            category_id: { [Op.between]: [1, 26] },
        });
    },
};
