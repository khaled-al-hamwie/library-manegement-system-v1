// import { NextFunction, Request, Response } from "express";
// import { Book } from "../models/book";
// import sequelize from "../providers/databaseProvider";

// class BookController {
//     static async getBooks(
//         req: Request,
//         res: Response,
//         next: NextFunction
//     ): Promise<Response> {
//         return res.json({
//             test: await Book(sequelize).findAll(),
//         });
//     }
// }
// export default BookController;
// // getBooks addBook showBook updateBook deleteBook
import { NextFunction, Request, Response } from "express";
import { Book } from "../models/book";
import sequelize from "../providers/databaseProvider";

class BookController {
    static async getBooks(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        return res.json();
    }

    static async createBook(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        return res.json();
    }

    static async showBook(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        return res.json();
    }

    static async updateBook(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        return res.json();
    }

    static async deleteBook(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        return res.json();
    }
}
export default BookController;
