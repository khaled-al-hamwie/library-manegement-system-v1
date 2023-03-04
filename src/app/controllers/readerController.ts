import { NextFunction, Request, Response } from "express";
import { Reader } from "../models/reader";
import HttpResponse from "../traits/responses";
import RegisterController from "./registerController";

class ReaderController {
    static async getReader(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        return res.json();
    }

    static async createReader(req: Request, res: Response, next: NextFunction) {
        const credential = await RegisterController.register(
            req.body.email,
            req.body.password,
            false
        );
        await Reader.create({
            credential_id: credential.credential_id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            phone_number: req.body.phone_number,
        })
            .then((reader) =>
                HttpResponse.creation(
                    res,
                    {
                        reader_id: reader.reader_id,
                        credential_id: reader.credential_id,
                        first_name: reader.first_name,
                        last_name: reader.last_name,
                        address: reader.address,
                        phone_number: reader.phone_number,
                        token: credential.tokens[0],
                    },
                    "Reader"
                )
            )
            .catch((errors) => HttpResponse.server(res, errors));
    }

    static async showReader(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        return res.json();
    }

    static async updateReader(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        return res.json();
    }

    static async deleteReader(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        return res.json();
    }
}
export default ReaderController;
