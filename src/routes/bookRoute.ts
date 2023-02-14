import { Router } from "express";
import BookController from "../app/controllers/bookController";
import { validationHandler } from "../app/middleware/validationHandler";
import { id } from "../app/schemas/id";
import { bookValidator } from "../app/validators/bookValidator";
const bookRouter: Router = Router();

bookRouter
    .route("/book")
    .get(bookValidator("get"), validationHandler, BookController.getBooks)
    .post(
        bookValidator("create"),
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
