import { Router } from "express";
import multer from "multer";
import path from "path";
import BookController from "../../app/controllers/bookController";
import { validationHandler } from "../../app/middleware/validationHandler";
import { id } from "../../app/schemas/id";
import { image } from "../../app/schemas/image";
import { bookValidator } from "../../app/validators/bookValidator";
export const bookRouterAdmin: Router = Router();
export const bookRouterPublic: Router = Router();

bookRouterAdmin
    .route("/book")
    .get(bookValidator("get"), validationHandler, BookController.getBooks)
    .post(
        multer().single("image"),
        bookValidator("create"),
        image,
        validationHandler,
        BookController.createBook
    );
bookRouterAdmin
    .route("/book/:id")
    .all(id, validationHandler)
    .get(BookController.showBook)
    .patch(
        multer().single("image"),
        bookValidator("update"),
        image,
        validationHandler,
        BookController.updateBook
    )
    .delete(BookController.deleteBook);

bookRouterPublic
    .route("/book")
    .get(bookValidator("get"), validationHandler, BookController.getBooks);

bookRouterPublic
    .route("/book/:id")
    .all(id, validationHandler)
    .get(BookController.showBook);
