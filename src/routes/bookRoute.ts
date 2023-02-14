import { Router } from "express";
import CategoryController from "../app/controllers/categoryController";
import { validationHandler } from "../app/middleware/validationHandler";
import { id } from "../app/schemas/id";
import { bookValidator } from "../app/validators/bookValidator";
const bookRouter: Router = Router();

bookRouter
    .route("/book")
    .get(
        bookValidator("get"),
        validationHandler,
        CategoryController.getCategory
    )
    .post(
        bookValidator("create"),
        validationHandler,
        CategoryController.createCategory
    );
bookRouter
    .route("/book/:id")
    .all([...id], validationHandler)
    .get(CategoryController.showCategory)
    .patch(
        bookValidator("update"),
        validationHandler,
        CategoryController.updateCategory
    )
    .delete(CategoryController.deleteCategory);
export default bookRouter;
