"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publisherController_1 = __importDefault(require("../app/controllers/publisherController"));
const validationHandler_1 = require("../app/middleware/validationHandler");
const id_1 = require("../app/schemas/id");
const publisherValidator_1 = require("../app/validators/publisherValidator");
const publisherRouter = (0, express_1.Router)();
publisherRouter
    .route("/publisher")
    .get(publisherController_1.default.getPublisher)
    .post((0, publisherValidator_1.publisherValidatorC)(), validationHandler_1.validationHandler, publisherController_1.default.createPublisher);
publisherRouter
    .route("/publisher/:id")
    .all([...id_1.id], validationHandler_1.validationHandler)
    .get(publisherController_1.default.showPublisher)
    .patch((0, publisherValidator_1.publisherValidatorU)(), validationHandler_1.validationHandler, publisherController_1.default.updatePublisher)
    .delete(publisherController_1.default.deletePublisher);
exports.default = publisherRouter;
