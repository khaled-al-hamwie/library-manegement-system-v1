import { Router } from "express";
import { param } from "express-validator";
import CategoryController from "../../app/controllers/categoryController";
import { validationHandler } from "../../app/middleware/validationHandler";
import { id } from "../../app/schemas/id";
import { categoryValidator } from "../../app/validators/categoryValidator";
export const categoryRouterAdmin: Router = Router();
export const categoryRouterPublic: Router = Router();

categoryRouterAdmin
    .route("/category")
    .get(param("name"), validationHandler, CategoryController.getCategory)
    .post(
        categoryValidator(),
        validationHandler,
        CategoryController.createCategory
    );
categoryRouterAdmin
    .route("/category/:id")
    .all(id, validationHandler)
    .get(CategoryController.showCategory)
    .patch(
        categoryValidator(true),
        validationHandler,
        CategoryController.updateCategory
    )
    .delete(CategoryController.deleteCategory);

categoryRouterPublic
    .route("/category")
    .get(param("name"), validationHandler, CategoryController.getCategory);

categoryRouterPublic
    .route("/category/:id")
    .all(id, validationHandler)
    .get(CategoryController.showCategory);
