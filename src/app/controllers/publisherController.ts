import { NextFunction, Request, Response } from "express";
import { Op } from "sequelize";
import { Publisher } from "../models/publisher";
import sequelize from "../providers/databaseProvider";
import HttpResponse from "../traits/responses";

class PublisherController {
    static async getPublisher(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const name = req.query.name;
        if (!name) return HttpResponse.fetch(res, await Publisher.findAll());
        else
            return HttpResponse.fetch(
                res,
                await Publisher.findAll({
                    where: { name: { [Op.regexp]: name } },
                })
            );
    }

    static async createPublisher(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        Publisher.create({
            name: req.body.name,
            publishing_date: req.body.publishing_date,
        })
            .then((results) => HttpResponse.creation(res, results, "publisher"))
            .catch((errors) => HttpResponse.server(res, errors));
    }

    static async showPublisher(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const id = req.params.id;
        return await Publisher.findByPk(id)
            .then((results) => {
                if (results == null)
                    return HttpResponse.notFound(res, "publisher", id);
                return HttpResponse.fetch(res, results);
            })
            .catch((errors) => HttpResponse.server(res, errors));
    }

    static async updatePublisher(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const id = req.params.id;
        const name: string = req.body.name;
        const publishing_date = req.body.publishing_date;
        const publisher = await Publisher.findByPk(id);
        if (publisher) {
            if (name) publisher.set("name", name);
            if (publishing_date)
                publisher.set("publishing_date", publishing_date);
            await publisher.save();
            return HttpResponse.ok(res);
        }
        return HttpResponse.notFound(res, "publisher", id);
    }

    static async deletePublisher(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const id: string = req.params.id;
        const publisher = await Publisher.findByPk(id);
        if (publisher) {
            await publisher.destroy();
            return HttpResponse.ok(res);
        }
        return HttpResponse.notFound(res, "publisher", id);
    }
}
export default PublisherController;
