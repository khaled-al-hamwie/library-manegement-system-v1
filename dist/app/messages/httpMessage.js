"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class httpMessage {
    static validation() {
        return "validation error";
    }
    static create(item) {
        const start = item.match(/\b[aeuio][a-zA-Z]*/g) ? "an" : "a";
        return `${start} ${item} has been created`;
    }
    static server() {
        return "server error";
    }
    static notFound() {
        return "not found error";
    }
    static notExists() {
        return "not exists error";
    }
    static unauthorized() {
        return "unauthorized error";
    }
    static fetch() {
        return "your data has been fetched successfully";
    }
}
exports.default = httpMessage;
