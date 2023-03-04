import { Router } from "express";
import { param } from "express-validator";
import PublisherController from "../../app/controllers/publisherController";
import { validationHandler } from "../../app/middleware/validationHandler";
import { id } from "../../app/schemas/id";
import { publisherValidator } from "../../app/validators/publisherValidator";
export const publisherRouterAdmin: Router = Router();

publisherRouterAdmin
    .route("/publisher")
    .get(param("name"), validationHandler, PublisherController.getPublisher)
    .post(
        publisherValidator(),
        validationHandler,
        PublisherController.createPublisher
    );
publisherRouterAdmin
    .route("/publisher/:id")
    .all(id, validationHandler)
    .get(PublisherController.showPublisher)
    .patch(
        publisherValidator(true),
        validationHandler,
        PublisherController.updatePublisher
    )
    .delete(PublisherController.deletePublisher);
