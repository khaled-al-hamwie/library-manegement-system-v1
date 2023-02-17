"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const sequelize_1 = require("sequelize");
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkInsert("Category", [
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
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            return queryInterface.bulkDelete("Category", {
                category_id: { [sequelize_1.Op.between]: [1, 26] },
            });
        });
    },
};
