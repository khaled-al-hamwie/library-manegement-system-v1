"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationRouterPublic = exports.reservationRouterAdmin = void 0;
const express_1 = require("express");
const reservationController_1 = __importDefault(require("../../app/controllers/reservationController"));
const validationHandler_1 = require("../../app/middleware/validationHandler");
const reservationValidator_1 = require("../../app/validators/reservationValidator");
exports.reservationRouterAdmin = (0, express_1.Router)();
exports.reservationRouterPublic = (0, express_1.Router)();
exports.reservationRouterAdmin
    .route("/reservation")
    .post((0, reservationValidator_1.reservationValidator)(), validationHandler_1.validationHandler, reservationController_1.default.createReservation)
    .get(reservationController_1.default.getReservation);
exports.reservationRouterPublic.get("/reservation", reservationController_1.default.showReservation);
