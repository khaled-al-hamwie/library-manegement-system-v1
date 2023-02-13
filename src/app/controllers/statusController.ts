import { NextFunction, Request, Response } from "express";
import { Op } from "sequelize";
import { Status } from "../models/status";
import sequelize from "../providers/databaseProvider";

import HttpResponse from "../traits/responses";

class StatusController {
    static async getStatus(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const name = req.query.name;
        if (!name) return HttpResponse.fetch(res, await Status.findAll());
        else
            return HttpResponse.fetch(
                res,
                await Status.findAll({
                    where: { name: { [Op.regexp]: name } },
                })
            );
    }

    static async createStatus(req: Request, res: Response, next: NextFunction) {
        Status.create({
            name: req.body.name,
        })
            .then((results) => HttpResponse.creation(res, results, "status"))
            .catch((errors) => HttpResponse.server(res, errors));
    }

    static async showStatus(req: Request, res: Response, next: NextFunction) {
        const id = req.params.id;
        return await Status.findByPk(id)
            .then((results) => {
                if (results == null)
                    return HttpResponse.notFound(res, "status", id);
                return HttpResponse.fetch(res, results);
            })
            .catch((errors) => HttpResponse.server(res, errors));
    }

    static async updateStatus(req: Request, res: Response, next: NextFunction) {
        const id = req.params.id;
        const name: string = req.body.name;
        const status = await Status.findByPk(id);
        if (status) {
            if (name) status.set("name", name);
            await status.save();
            return HttpResponse.ok(res);
        }
        return HttpResponse.notFound(res, "status", id);
    }

    static async deleteStatus(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const id: string = req.params.id;
        const status = await Status.findByPk(id);
        if (status) {
            await status.destroy();
            return HttpResponse.ok(res);
        }
        return HttpResponse.notFound(res, "status", id);
    }
}
export default StatusController;
