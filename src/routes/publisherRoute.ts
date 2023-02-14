import { Router } from "express";
import PublisherController from "../app/controllers/publisherController";
import { validationHandler } from "../app/middleware/validationHandler";
import { id } from "../app/schemas/id";
import { publisherValidator } from "../app/validators/publisherValidator";
const publisherRouter: Router = Router();

publisherRouter
    .route("/publisher")
    .get(PublisherController.getPublisher)
    .post(
        publisherValidator(),
        validationHandler,
        PublisherController.createPublisher
    );
publisherRouter
    .route("/publisher/:id")
    .all([...id], validationHandler)
    .get(PublisherController.showPublisher)
    .patch(
        publisherValidator(true),
        validationHandler,
        PublisherController.updatePublisher
    )
    .delete(PublisherController.deletePublisher);
export default publisherRouter;
