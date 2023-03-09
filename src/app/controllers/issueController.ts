import { NextFunction, Request, Response } from "express";
import { Op } from "sequelize";
import { Issue } from "../models/issue";
import HttpResponse from "../traits/responses";

class IssueController {
    static async getIssue(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        let name = req.query.name;
        if (!name) return HttpResponse.fetch(res, await Issue.findAll());
        else {
            return HttpResponse.fetch(
                res,
                await Issue.findAll({
                    where: { type: { [Op.regexp]: name.toString() } },
                })
            );
        }
    }

    static async createIssue(req: Request, res: Response, next: NextFunction) {
        await Issue.create({
            type: req.body.type,
            description: req.body.description,
        })
            .then((result) => HttpResponse.creation(res, result, "Issue"))
            .catch((err) => HttpResponse.server(res, err));
    }

    static async updateIssue(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const id = req.params.id;
        const type: string = req.body.type;
        const description: string = req.body.description;
        const issue = await Issue.findByPk(id);
        if (issue) {
            if (type) issue.set("type", type);
            if (description) issue.set("description", description);
            await issue.save();
            return HttpResponse.ok(res);
        }
        return HttpResponse.notFound(res, "status", id);
    }

    static async deleteIssue(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const id: string = req.params.id;
        const issue = await Issue.findByPk(id);
        if (issue) {
            await issue.destroy();
            return HttpResponse.ok(res);
        }
        return HttpResponse.notFound(res, "issue", id);
    }
}
export default IssueController;
