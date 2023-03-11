import { Router } from "express";
import ReportController from "../../app/controllers/reportController";
import { validationHandler } from "../../app/middleware/validationHandler";
import { reportValidator } from "../../app/validators/reportValidator";
export const reportRouterAdmin: Router = Router();

reportRouterAdmin
    .route("/report")
    .get(ReportController.getReport)
    .post(reportValidator(), validationHandler, ReportController.createReport);
