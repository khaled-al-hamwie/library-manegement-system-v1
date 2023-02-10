import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { Op } from "sequelize";
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
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return HttpResponse.validation(res, errors.array());
        }
        await Category.create({
            name: req.body.name,
            description: req.body.description,
        })
            .then((result) => HttpResponse.creation(res, result, "category"))
            .catch((err) => HttpResponse.server(res, err));
    }

    static async showCategory(req: Request, res: Response, next: NextFunction) {
        await Category.findByPk(req.params.id)
            .then((results) => {
                if (results == null) {
                    HttpResponse.notFound(res, "category", req.params.id);
                }
                HttpResponse.fetch(res, results);
            })
            .catch((errors) => HttpResponse.server(res, errors));
    }

    static async updateCategory(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return HttpResponse.validation(res, errors.array());
        }
        const id: string = req.params.id;
        const name: string = req.body.name;
        const description: string = req.body.description;
        const category = await Category.findByPk(id);
        if (category) {
            console.log(req.body.name, req.body.description);
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
