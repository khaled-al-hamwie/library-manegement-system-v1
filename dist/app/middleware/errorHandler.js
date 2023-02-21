"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(err, req, res, next) {
    if (err.name == "SyntaxError") {
        return res.status(400).json({ message: err.name, errors: err.message });
    }
    res.status(400).json({ err: err });
}
exports.errorHandler = errorHandler;
