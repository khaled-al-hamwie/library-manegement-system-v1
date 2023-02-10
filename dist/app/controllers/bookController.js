"use strict";
// import { NextFunction, Request, Response } from "express";
// import { Book } from "../models/book";
// import sequelize from "../providers/databaseProvider";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class BookController {
    static getBooks(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json();
        });
    }
    static createBook(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json();
        });
    }
    static showBook(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json();
        });
    }
    static updateBook(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json();
        });
    }
    static deleteBook(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json();
        });
    }
}
exports.default = BookController;
