import { Router } from "express";
import statusController from "../app/controllers/statusController";
import { validationHandler } from "../app/middleware/validationHandler";
import { id } from "../app/schemas/id";
import {
    statusValidatorC,
    statusValidatorU,
} from "../app/validators/statusValidator";
const statusRouter: Router = Router();

statusRouter
    .route("/status")
    .get(statusController.getStatus)
    .post(statusValidatorC(), validationHandler, statusController.createStatus);
statusRouter
    .route("/status/:id")
    .all([...id], validationHandler)
    .get(statusController.showStatus)
    .patch(statusValidatorU(), validationHandler, statusController.updateStatus)
    .delete(statusController.deleteStatus);
export default statusRouter;
