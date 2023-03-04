import { NextFunction, Request, Response } from "express";
import { Credential } from "../models/credential";
import { Staff } from "../models/staff";
import HttpResponse from "../traits/responses";
import RegisterController from "./registerController";

class StaffController {
    static async getStaff(req: Request, res: Response, next: NextFunction) {
        return HttpResponse.fetch(res, await Staff.findAll({}));
    }

    static async createStaff(req: Request, res: Response, next: NextFunction) {
        const credential = await RegisterController.register(
            req.body.email,
            req.body.password,
            true
        );
        await Staff.create({
            credential_id: credential.credential_id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            phone_number: req.body.phone_number,
        })
            .then((staff) =>
                HttpResponse.creation(
                    res,
                    {
                        staff_id: staff.staff_id,
                        credential_id: staff.credential_id,
                        first_name: staff.first_name,
                        last_name: staff.last_name,
                        address: staff.address,
                        phone_number: staff.phone_number,
                        token: credential.tokens[0],
                    },
                    "Staff"
                )
            )
            .catch((errors) => HttpResponse.server(res, errors));
    }

    static async deleteStaff(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response> {
        const id: string = req.params.id;
        const staff = await Staff.findByPk(id);
        if (staff) {
            const credential = await Credential.findOne({
                where: { credential_id: staff.credential_id },
            });
            await staff.destroy();
            await credential?.destroy();
            return HttpResponse.ok(res);
        }
        return HttpResponse.notFound(res, "staff", id);
    }
}
export default StaffController;
