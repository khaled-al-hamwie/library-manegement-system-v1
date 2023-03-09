import { Router } from "express";
import { param } from "express-validator";
import IssueController from "../../app/controllers/issueController";
import { validationHandler } from "../../app/middleware/validationHandler";
import { id } from "../../app/schemas/id";
import { issueValidator } from "../../app/validators/issueValidator";
export const issueRouterAdmin: Router = Router();

issueRouterAdmin
    .route("/issue")
    .get(param("name"), validationHandler, IssueController.getIssue)
    .post(issueValidator(), validationHandler, IssueController.createIssue);
issueRouterAdmin
    .route("/issue/:id")
    .all(id, validationHandler)
    .patch(issueValidator(true), validationHandler, IssueController.updateIssue)
    .delete(IssueController.deleteIssue);
