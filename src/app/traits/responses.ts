import { Express, Response } from "express";
import httpMessage from "../messages/httpMessage";
import validationMessage from "../messages/validationMessage";

class HttpResponse {
    static validation(res: Response, errors: any): Response {
        return res.status(422).json({
            message: httpMessage.validation(),
            errors: errors,
        });
    }
    static creation(res: Response, result: any, name: string): Response {
        return res.status(201).json({
            message: httpMessage.create(name),
            result: result,
        });
    }
    static server(res: Response, errors: any): Response {
        return res.status(500).json({
            message: httpMessage.server(),
            errors: errors,
        });
    }
    static notFound(res: Response, name: string, value: any): Response {
        return res.status(404).json({
            message: httpMessage.notFound(),
            errors: validationMessage.notFound(name, value),
        });
    }
    static Unauthorized(res: Response): Response {
        return res.status(401).json({
            message: httpMessage.unauthorized(),
        });
    }
    static ok(res: Response): Response {
        return res.json({
            message: "done",
        });
    }
    static fetch(res: Response, result: any): Response {
        return res.status(200).json({
            message: httpMessage.fetch(),
            result: result,
        });
    }
}

export default HttpResponse;
