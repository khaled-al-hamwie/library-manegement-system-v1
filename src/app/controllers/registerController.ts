import { compare } from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import { Credential } from "../models/credential";
import HttpResponse from "../traits/responses";
class RegisterController {
    static async register(
        email: string,
        password: string,
        isAdmin: boolean = false
    ) {
        return await Credential.create({
            email,
            password,
            isAdmin,
        });
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
