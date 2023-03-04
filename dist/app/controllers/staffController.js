"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const credential_1 = require("../models/credential");
const staff_1 = require("../models/staff");
const responses_1 = __importDefault(require("../traits/responses"));
const registerController_1 = __importDefault(require("./registerController"));
class StaffController {
    static getStaff(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return responses_1.default.fetch(res, yield staff_1.Staff.findAll({}));
        });
    }
    static createStaff(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const credential = yield registerController_1.default.register(req.body.email, req.body.password, true);
            yield staff_1.Staff.create({
                credential_id: credential.credential_id,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                address: req.body.address,
                phone_number: req.body.phone_number,
            })
                .then((staff) => responses_1.default.creation(res, {
                staff_id: staff.staff_id,
                credential_id: staff.credential_id,
                first_name: staff.first_name,
                last_name: staff.last_name,
                address: staff.address,
                phone_number: staff.phone_number,
                token: credential.tokens[0],
            }, "Staff"))
                .catch((errors) => responses_1.default.server(res, errors));
        });
    }
    static deleteStaff(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const staff = yield staff_1.Staff.findByPk(id);
            if (staff) {
                const credential = yield credential_1.Credential.findOne({
                    where: { credential_id: staff.credential_id },
                });
                yield staff.destroy();
                yield (credential === null || credential === void 0 ? void 0 : credential.destroy());
                return responses_1.default.ok(res);
            }
            return responses_1.default.notFound(res, "staff", id);
        });
    }
}
exports.default = StaffController;
