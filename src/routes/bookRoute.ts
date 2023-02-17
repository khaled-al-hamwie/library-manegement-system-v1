import { Router } from "express";
import multer from "multer";
import path from "path";
import BookController from "../app/controllers/bookController";
import { validationHandler } from "../app/middleware/validationHandler";
import { id } from "../app/schemas/id";
import { image } from "../app/schemas/image";
import { bookValidator } from "../app/validators/bookValidator";
const bookRouter: Router = Router();

bookRouter
    .route("/book")
    .get(bookValidator("get"), validationHandler, BookController.getBooks)
    .post(
        multer().single("image"),
        bookValidator("create"),
        image,
        validationHandler,
        BookController.createBook
    );
bookRouter
    .route("/book/:id")
    .all([...id], validationHandler)
    .get(BookController.showBook)
    .patch(
        bookValidator("update"),
        validationHandler,
        BookController.updateBook
    )
    .delete(BookController.deleteBook);
export default bookRouter;
