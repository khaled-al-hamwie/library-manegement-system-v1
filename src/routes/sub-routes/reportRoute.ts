import { Router } from "express";
import { param } from "express-validator";
import ReportController from "../../app/controllers/reportController";
import { validationHandler } from "../../app/middleware/validationHandler";
import { reportValidator } from "../../app/validators/reportValidator";
export const reportRouterAdmin: Router = Router();

reportRouterAdmin
    .route("/report")
    .get(param("name"), validationHandler, ReportController.getReport)
    .post(reportValidator(), validationHandler, ReportController.createReport);
