import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Op } from "sequelize";
import { Book } from "../models/book";
import HttpResponse from "../traits/responses";
import saveImage from "../traits/saveImage";
class BookController {
    static async getBooks(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const title = req.query.title;
        if (!title) return HttpResponse.fetch(res, await Book.findAll());
        else {
            return HttpResponse.fetch(
                res,
                await Book.findAll({
                    where: { name: { [Op.regexp]: title } },
                })
            );
        }
    }

    static async createBook(req: Request, res: Response, next: NextFunction) {
        const imageName: string | null = req.file
            ? Date.now() +
              "-" +
              Math.round(Math.random() * 1e9) +
              "-" +
              req.file.originalname.trim()
            : null;
        await Book.create({
            category_id: req.body.category_id,
            author_id: req.body.author_id,
            publisher_id: req.body.publisher_id,
            status_id: req.body.status_id,
            title: req.body.title,
            description: req.body.description,
            edition: req.body.edition,
            price: req.body.price,
            reservation_price: req.body.reservation_price,
            image: imageName,
        })
            .then((result) => {
                if (req.file && imageName)
                    saveImage(req.file.buffer, imageName);
                return HttpResponse.creation(res, result, "book");
            })
            .catch((err) => HttpResponse.server(res, err));
    }

    static async showBook(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const id: string = req.params.id;
        const book = await Book.findByPk(id);
        if (book) {
            const publisher = await book.getPublisher();
            return HttpResponse.fetch(res, {
                book_id: book.book_id,
                category: {
                    category_id: book.category_id,
                    name: (await book.getCategory()).name,
                },
                author: {
                    author_id: book.author_id,
                    name: (await book.getAuthor()).name,
                },
                publisher: {
                    publisher_id: book.publisher_id,
                    name: publisher.name,
                    year: publisher.publishing_date,
                },
                status: {
                    status_id: book.status_id,
                    name: (await book.getStatus()).name,
                },
                title: book.title,
                description: book.description,
                edition: book.edition,
                price: book.price,
                reservation_price: book.reservation_price,
                image: book.image,
            });
        }
        return HttpResponse.notFound(res, "book", id);
    }

    static async updateBook(req: Request, res: Response, next: NextFunction) {
        const id: string = req.params.id;
        const request = req.body;
        const book = await Book.findByPk(id);
        const imageName: string | null = req.file
            ? Date.now() +
              "-" +
              Math.round(Math.random() * 1e9) +
              "-" +
              req.file.originalname.trim()
            : null;
        if (book) {
            await book
                .update({
                    category_id: request.category_id
                        ? request.category_id
                        : book.category_id,
                    author_id: request.author_id
                        ? request.author_id
                        : book.author_id,
                    publisher_id: request.publisher_id
                        ? request.publisher_id
                        : book.publisher_id,
                    status_id: request.status_id
                        ? request.status_id
                        : book.status_id,
                    title: request.title ? request.title : book.title,
                    description: request.description
                        ? request.description
                        : book.description,
                    edition: request.edition ? request.edition : book.edition,
                    price: request.price ? request.price : book.price,
                    reservation_price: request.reservation_price
                        ? request.reservation_price
                        : book.reservation_price,
                    image: imageName ? imageName : book.image,
                })
                .then(() => {
                    if (req.file && imageName)
                        saveImage(req.file.buffer, imageName);
                    return HttpResponse.ok(res);
                })
                .catch((err) => HttpResponse.server(res, err));
        } else return HttpResponse.notFound(res, "book", id);
    }

    static async deleteBook(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const id: string = req.params.id;
        const book = await Book.findByPk(id);
        if (book) {
            await book.destroy();
            return HttpResponse.ok(res);
        }
        return HttpResponse.notFound(res, "book", id);
    }
}
export default BookController;
