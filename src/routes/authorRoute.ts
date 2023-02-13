import { NextFunction, Router } from "express";
import AuthorController from "../app/controllers/authorController";
import { validationHandler } from "../app/middleware/validationHandler";
import { id } from "../app/schemas/id";
import {
    authorValidatorC,
    authorValidatorU,
} from "../app/validators/authorValidator";

const authorRouter: Router = Router();

authorRouter
    .route("/author")
    .get(AuthorController.getAuthor)
    .post(authorValidatorC(), validationHandler, AuthorController.createAuthor);
authorRouter
    .route("/author/:id")
    .all([...id], validationHandler)
    .get(AuthorController.showAuthor)
    .patch(authorValidatorU(), validationHandler, AuthorController.updateAuthor)
    .delete(AuthorController.deleteAuthor);

export default authorRouter;
