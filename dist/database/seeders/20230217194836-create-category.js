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
                    name: "Art",
                    description: "this is the Art category",
                },
                {
                    category_id: 2,
                    name: "Biography",
                    description: "this is the Biography category",
                },
                {
                    category_id: 3,
                    name: "Business",
                    description: "this is the Business category",
                },
                {
                    category_id: 4,
                    name: "Chick Lit",
                    description: "this is the Chick Lit category",
                },
                {
                    category_id: 5,
                    name: "Children's",
                    description: "this is the Children's category",
                },
                {
                    category_id: 6,
                    name: "Christian",
                    description: "this is the Christian category",
                },
                {
                    category_id: 7,
                    name: "Classics",
                    description: "this is the Classics category",
                },
                {
                    category_id: 8,
                    name: "Comics",
                    description: "this is the Comics category",
                },
                {
                    category_id: 9,
                    name: "Contemporary",
                    description: "this is the Contemporary category",
                },
                {
                    category_id: 10,
                    name: "Cookbooks",
                    description: "this is the Cookbooks category",
                },
                {
                    category_id: 11,
                    name: "Crime",
                    description: "this is the Crime category",
                },
                {
                    category_id: 12,
                    name: "Ebooks",
                    description: "this is the Ebooks category",
                },
                {
                    category_id: 13,
                    name: "Fantasy",
                    description: "this is the Fantasy category",
                },
                {
                    category_id: 14,
                    name: "Fiction",
                    description: "this is the Fiction category",
                },
                {
                    category_id: 15,
                    name: "Graphic Novels",
                    description: "this is the Graphic Novels category",
                },
                {
                    category_id: 16,
                    name: "Historical Fiction",
                    description: "this is the Historical Fiction category",
                },
                {
                    category_id: 17,
                    name: "History",
                    description: "this is the History category",
                },
                {
                    category_id: 18,
                    name: "Horror",
                    description: "this is the Horror category",
                },
                {
                    category_id: 19,
                    name: "Humor and Comedy",
                    description: "this is the Humor and Comedy category",
                },
                {
                    category_id: 20,
                    name: "Manga",
                    description: "this is the Manga category",
                },
                {
                    category_id: 21,
                    name: "Memoir",
                    description: "this is the Memoir category",
                },
                {
                    category_id: 22,
                    name: "Music",
                    description: "this is the Music category",
                },
                {
                    category_id: 23,
                    name: "Mystery",
                    description: "this is the Mystery category",
                },
                {
                    category_id: 24,
                    name: "Nonfiction",
                    description: "this is the Nonfiction category",
                },
                {
                    category_id: 25,
                    name: "Paranormal",
                    description: "this is the Paranormal category",
                },
                {
                    category_id: 26,
                    name: "Philosophy",
                    description: "this is the Philosophy category",
                },
                {
                    category_id: 28,
                    name: "Poetry",
                    description: "this is the Poetry category",
                },
                {
                    category_id: 29,
                    name: "Psychology",
                    description: "this is the Psychology category",
                },
                {
                    category_id: 30,
                    name: "Religion",
                    description: "this is the Religion category",
                },
                {
                    category_id: 31,
                    name: "Romance",
                    description: "this is the Romance category",
                },
                {
                    category_id: 32,
                    name: "Science Fiction",
                    description: "this is the Science Fiction category",
                },
                {
                    category_id: 33,
                    name: "Self Help",
                    description: "this is the Self Help category",
                },
                {
                    category_id: 34,
                    name: "Suspense",
                    description: "this is the Suspense category",
                },
                {
                    category_id: 35,
                    name: "Spirituality",
                    description: "this is the Spirituality category",
                },
                {
                    category_id: 36,
                    name: "Sports",
                    description: "this is the Sports category",
                },
                {
                    category_id: 37,
                    name: "Thriller",
                    description: "this is the Thriller category",
                },
                {
                    category_id: 38,
                    name: "Travel",
                    description: "this is the Travel category",
                },
                {
                    category_id: 39,
                    name: "Young Adult",
                    description: "this is the Young category",
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
