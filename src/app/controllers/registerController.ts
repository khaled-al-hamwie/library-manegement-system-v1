import { NextFunction, Request, Response } from "express";
import { Credential } from "../models/credential";
import { Reader } from "../models/reader";
import HttpResponse from "../traits/responses";

class RegisterController {
    static async register(req: Request, res: Response, nex: NextFunction) {
        const email: string = req.body.email;
        const password: string = req.body.password;
        let credential = await Credential.create({
            email: email,
            password: password,
        });
        await Reader.create({
            credential_id: credential.credential_id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            phone_number: req.body.phone_number,
        })
            .then((results) =>
                HttpResponse.creation(
                    res,
                    { results, token: credential.tokens[0] },
                    "Reader"
                )
            )
            .catch((errors) => HttpResponse.server(res, errors));
    }
}

export default RegisterController;
