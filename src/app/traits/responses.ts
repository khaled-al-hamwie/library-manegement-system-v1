import { Express, Response } from "express";
import httpMessage from "../messages/httpMessage";

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
    static fetch(res: Response, result: any): Response {
        return res.status(200).json({
            message: httpMessage.fetch(),
            result: result,
        });
    }
}

export default HttpResponse;
