import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { Op } from "sequelize";
import { Book } from "../models/book";
import { Category } from "../models/category";
import sequelize from "../providers/databaseProvider";
import HttpResponse from "../traits/responses";

class CategoryController {
    static async getCategory(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const name = req.query.name;
        if (!name) return HttpResponse.fetch(res, await Category.findAll());
        else {
            return HttpResponse.fetch(
                res,
                await Category.findAll({
                    where: { name: { [Op.regexp]: name } },
                })
            );
        }
    }

    static async createCategory(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await Category.create({
            name: req.body.name,
            description: req.body.description,
        })
            .then((result) => HttpResponse.creation(res, result, "category"))
            .catch((err) => HttpResponse.server(res, err));
    }

    static async showCategory(req: Request, res: Response, next: NextFunction) {
        const id: string = req.params.id;
        const category = await Category.findByPk(id);
        if (category) {
            return HttpResponse.fetch(res, {
                category,
                books: await category.getBooks(),
                count: await category.countBooks(),
            });
        }
        return HttpResponse.notFound(res, "category", id);
    }

    static async updateCategory(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const id: string = req.params.id;
        const name: string = req.body.name;
        const description: string = req.body.description;
        const category = await Category.findByPk(id);
        if (category) {
            if (name) {
                category.set("name", name);
            }
            if (description) category.set("description", description);
            await category.save();
            return HttpResponse.ok(res);
        }
        return HttpResponse.notFound(res, "category", id);
    }

    static async deleteCategory(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const id: string = req.params.id;
        const category = await Category.findByPk(id);
        if (category) {
            await category.destroy();
            return HttpResponse.ok(res);
        }
        return HttpResponse.notFound(res, "category", id);
    }
}
export default CategoryController;
