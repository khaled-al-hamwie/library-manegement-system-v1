import { Router } from "express";
import { param } from "express-validator";
import AuthorController from "../../app/controllers/authorController";
import { validationHandler } from "../../app/middleware/validationHandler";
import { id } from "../../app/schemas/id";
import { authorValidator } from "../../app/validators/authorValidator";

export const authorRouterAdmin: Router = Router();
export const authorRouterPublic: Router = Router();
authorRouterAdmin
    .route("/author")
    .get(param("name"), validationHandler, AuthorController.getAuthor)
    .post(authorValidator(), validationHandler, AuthorController.createAuthor);
authorRouterAdmin
    .route("/author/:id")
    .all(id, validationHandler)
    .get(AuthorController.showAuthor)
    .patch(
        authorValidator(true),
        validationHandler,
        AuthorController.updateAuthor
    )
    .delete(AuthorController.deleteAuthor);

authorRouterPublic
    .route("/author")
    .get(param("name"), validationHandler, AuthorController.getAuthor);
authorRouterPublic
    .route("/author/:id")
    .all(id, validationHandler)
    .get(AuthorController.showAuthor);
