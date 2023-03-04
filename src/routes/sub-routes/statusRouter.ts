import { Router } from "express";
import { param } from "express-validator";
import StatusController from "../../app/controllers/statusController";
import { validationHandler } from "../../app/middleware/validationHandler";
import { id } from "../../app/schemas/id";
import { statusValidator } from "../../app/validators/statusValidator";
export const statusRouterAdmin: Router = Router();

statusRouterAdmin
    .route("/status")
    .get(param("name"), validationHandler, StatusController.getStatus)
    .post(statusValidator(), validationHandler, StatusController.createStatus);
statusRouterAdmin
    .route("/status/:id")
    .all(id, validationHandler)
    .get(StatusController.showStatus)
    .patch(
        statusValidator(true),
        validationHandler,
        StatusController.updateStatus
    )
    .delete(StatusController.deleteStatus);
