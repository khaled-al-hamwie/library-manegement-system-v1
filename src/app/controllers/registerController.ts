import { compare } from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import { Credential } from "../models/credential";
import { Reader } from "../models/reader";
import HttpResponse from "../traits/responses";
class RegisterController {
    static async register(req: Request, res: Response, next: NextFunction) {
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

    static async login(req: Request, res: Response, next: NextFunction) {
        await Credential.findOne({
            where: { email: req.body.email },
        })
            .then(async (credential) => {
                if (credential) {
                    return {
                        done: await compare(
                            req.body.password,
                            credential.password
                        ),
                        token: credential.tokens[0],
                    };
                }
                throw new Error("Credential does n't match ");
            })
            .then(({ done, token }) => {
                if (done) return res.json({ result: token });
                throw new Error("Credential does n't match ");
            })
            .catch((e) => HttpResponse.validation(res, e.message));
    }
}
export default RegisterController;
