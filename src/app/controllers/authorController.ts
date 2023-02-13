import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { Op } from "sequelize";
import { Author } from "../models/author";
import sequelize from "../providers/databaseProvider";
import HttpResponse from "../traits/responses";

class AuthorController {
    static async getAuthor(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const name = req.query.name;
        if (!name) return HttpResponse.fetch(res, await Author.findAll());
        else
            return HttpResponse.fetch(
                res,
                await Author.findAll({
                    where: { name: { [Op.regexp]: name } },
                })
            );
    }

    static async createAuthor(req: Request, res: Response, next: NextFunction) {
        await Author.create({
            name: req.body.name,
            description: req.body.description,
            born: req.body.born,
        })
            .then((result) => {
                HttpResponse.creation(res, result, "author");
            })
            .catch((err) => HttpResponse.server(res, err));
    }

    static async showAuthor(req: Request, res: Response, next: NextFunction) {
        await Author.findByPk(req.params.id)
            .then((results) => {
                if (results == null) {
                    return HttpResponse.notFound(res, "author", req.params.id);
                }
                return HttpResponse.fetch(res, results);
            })
            .catch((errors) => HttpResponse.server(res, errors));
    }

    static async updateAuthor(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const id: string = req.params.id;
        const name: string = req.body.name;
        const description: string = req.body.description;
        const born: Date = req.body.born;
        const author = await Author.findByPk(id);
        if (author) {
            if (name) {
                author.set("name", name);
            }
            if (description) author.set("description", description);
            if (born) author.set("born", born);
            await author.save();
            return HttpResponse.ok(res);
        }
        return HttpResponse.notFound(res, "author", id);
    }

    static async deleteAuthor(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const id: string = req.params.id;
        const author = await Author.findByPk(id);
        if (author) {
            await author.destroy();
            return HttpResponse.ok(res);
        }
        return HttpResponse.notFound(res, "author", id);
    }
}
export default AuthorController;
