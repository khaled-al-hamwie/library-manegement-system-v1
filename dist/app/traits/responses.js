"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpMessage_1 = __importDefault(require("../messages/httpMessage"));
const validationMessage_1 = __importDefault(require("../messages/validationMessage"));
class HttpResponse {
    static validation(res, errors) {
        return res.status(422).json({
            message: httpMessage_1.default.validation(),
            errors: errors,
        });
    }
    static creation(res, result, name) {
        return res.status(201).json({
            message: httpMessage_1.default.create(name),
            result: result,
        });
    }
    static server(res, errors) {
        return res.status(500).json({
            message: httpMessage_1.default.server(),
            errors: errors,
        });
    }
    static notFound(res, name, value) {
        return res.status(404).json({
            message: httpMessage_1.default.notFound(),
            errors: validationMessage_1.default.notFound(name, value),
        });
    }
    static Unauthorized(res) {
        return res.status(401).json({
            message: httpMessage_1.default.unauthorized(),
        });
    }
    static ok(res) {
        return res.json({
            message: "done",
        });
    }
    static fetch(res, result) {
        return res.status(200).json({
            message: httpMessage_1.default.fetch(),
            result: result,
        });
    }
}
exports.default = HttpResponse;
