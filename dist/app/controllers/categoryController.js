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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const category_1 = require("../models/category");
const responses_1 = __importDefault(require("../traits/responses"));
class CategoryController {
    static getCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = req.query.name;
            if (!name)
                return responses_1.default.fetch(res, yield category_1.Category.findAll());
            else {
                return responses_1.default.fetch(res, yield category_1.Category.findAll({
                    where: { name: { [sequelize_1.Op.regexp]: name } },
                }));
            }
        });
    }
    static createCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield category_1.Category.create({
                name: req.body.name,
                description: req.body.description,
            })
                .then((result) => responses_1.default.creation(res, result, "category"))
                .catch((err) => responses_1.default.server(res, err));
        });
    }
    static showCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const category = yield category_1.Category.findByPk(id);
            if (category) {
                return responses_1.default.fetch(res, {
                    category,
                    books: yield category.getBooks(),
                    count: yield category.countBooks(),
                });
            }
            return responses_1.default.notFound(res, "category", id);
        });
    }
    static updateCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const name = req.body.name;
            const description = req.body.description;
            const category = yield category_1.Category.findByPk(id);
            if (category) {
                if (name) {
                    category.set("name", name);
                }
                if (description)
                    category.set("description", description);
                yield category.save();
                return responses_1.default.ok(res);
            }
            return responses_1.default.notFound(res, "category", id);
        });
    }
    static deleteCategory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const category = yield category_1.Category.findByPk(id);
            if (category) {
                yield category.destroy();
                return responses_1.default.ok(res);
            }
            return responses_1.default.notFound(res, "category", id);
        });
    }
}
exports.default = CategoryController;
