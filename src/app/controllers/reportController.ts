import { NextFunction, Request, Response } from "express";
import { FindOptions, Op } from "sequelize";
import { Report } from "../models/report";
import { Staff } from "../models/staff";
import HttpResponse from "../traits/responses";

class ReportController {
    static async getReport(req: Request, res: Response, next: NextFunction) {
        let option = req.query.option;
        let searchQuery: FindOptions<any> | undefined = undefined;
        let start = new Date();
        let end = new Date();
        switch (option) {
            case "today":
                start.setHours(0, 0, 0, 0);
                end.setHours(23, 59, 59, 59);
                searchQuery = {
                    where: {
                        date: {
                            [Op.between]: [start, end],
                        },
                    },
                };
                break;
            case "yesterday":
                start.setHours(0, 0, 0, 0);
                start.setDate(start.getDate() - 1);
                end.setHours(23, 59, 59, 59);
                end.setDate(end.getDate() - 1);
                searchQuery = {
                    where: {
                        date: {
                            [Op.between]: [start, end],
                        },
                    },
                };
                break;
            case "this_week":
                start.setHours(0, 0, 0, 0);
                end.setHours(23, 59, 59, 59);
                end.setDate(end.getDate() + 7);
                searchQuery = {
                    where: {
                        date: {
                            [Op.between]: [start, end],
                        },
                    },
                };
                break;
            case "last_week":
                start.setHours(0, 0, 0, 0);
                end.setDate(end.getDate() - 7);
                end.setHours(23, 59, 59, 59);
                searchQuery = {
                    where: {
                        date: {
                            [Op.between]: [start, end],
                        },
                    },
                };
                break;
            default:
                searchQuery = undefined;
                break;
        }
        return HttpResponse.fetch(res, await Report.findAll(searchQuery));
    }

    static async createReport(req: Request, res: Response, next: NextFunction) {
        let staff = await Staff.findOne({
            where: { credential_id: req.body.id },
        });
        await Report.create({
            book_id: req.body.book_id,
            reader_id: req.body.reader_id,
            staff_id: Number(staff?.staff_id),
            issue_id: req.body.issue_id,
            reservation_id: req.body.reservation_id,
            payment_id: req.body.payment_id,
            report: req.body.report,
        })
            .then((result) => HttpResponse.creation(res, result, "report"))
            .catch((err) => HttpResponse.server(res, err));
    }
}
export default ReportController;
