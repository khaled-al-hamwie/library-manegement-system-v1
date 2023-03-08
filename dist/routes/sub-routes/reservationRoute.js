"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationRouterPublic = exports.reservationRouterAdmin = void 0;
const express_1 = require("express");
const reservationController_1 = __importDefault(require("../../app/controllers/reservationController"));
const errorHandler_1 = require("../../app/middleware/errorHandler");
exports.reservationRouterAdmin = (0, express_1.Router)();
exports.reservationRouterPublic = (0, express_1.Router)();
exports.reservationRouterAdmin
    .route("/reservation")
    .post(errorHandler_1.errorHandler, reservationController_1.default.createReservation)
    .get(reservationController_1.default.getReservation);
exports.reservationRouterPublic.get("/reservation", reservationController_1.default.showReservation);
