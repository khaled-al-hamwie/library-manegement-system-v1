import { NextFunction, Request, Response } from "express";
import { Report } from "../models/report";

class ReportController {
    static async getReport(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        return res.json();
    }

    static async createReport(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        return res.json();
    }
}
export default ReportController;
