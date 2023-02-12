import { Router } from "express";
import CategoryController from "../app/controllers/categoryController";
import { validationHandler } from "../app/middleware/validationHandler";
import { id } from "../app/schemas/id";
import {
    categoryValidatorC,
    categoryValidatorU,
} from "../app/validators/categoryValidator";
const categoryRouter: Router = Router();

categoryRouter
    .route("/category")
    .get(CategoryController.getCategory)
    .post(
        categoryValidatorC(),
        validationHandler,
        CategoryController.createCategory
    );
categoryRouter
    .route("/category/:id")
    .all([...id], validationHandler)
    .get(CategoryController.showCategory)
    .patch(
        categoryValidatorU(),
        validationHandler,
        CategoryController.updateCategory
    )
    .delete(CategoryController.deleteCategory);
export default categoryRouter;
