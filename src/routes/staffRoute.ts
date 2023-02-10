import { Router } from "express";
import BookController from "../app/controllers/bookController";
import CategoryController from "../app/controllers/categoryController";
import {
    categoryCreateValidate,
    categoryUpdateValidate,
} from "../app/validators/categoryValidator";
const router: Router = Router();

router
    .route("/category")
    .get(CategoryController.getCategory)
    .post(categoryCreateValidate(), CategoryController.createCategory);
router
    .route("/category/:id")
    .get(CategoryController.showCategory)
    .patch(categoryUpdateValidate(), CategoryController.updateCategory)
    .delete(CategoryController.deleteCategory);

router.route("/book").get(BookController.getBooks);

export default router;
