import { Router } from "express";
import PublisherController from "../app/controllers/publisherController";
import { validationHandler } from "../app/middleware/validationHandler";
import { id } from "../app/schemas/id";
import {
    publisherValidatorC,
    publisherValidatorU,
} from "../app/validators/publisherValidator";
const publisherRouter: Router = Router();

publisherRouter
    .route("/category")
    .get(PublisherController.getPublisher)
    .post(
        publisherValidatorC(),
        validationHandler,
        PublisherController.createPublisher
    );
publisherRouter
    .route("/category/:id")
    .all([...id], validationHandler)
    .get(PublisherController.showPublisher)
    .patch(
        publisherValidatorU(),
        validationHandler,
        PublisherController.updatePublisher
    )
    .delete(PublisherController.deletePublisher);
export default publisherRouter;
