"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class validationMessage {
    static empty(field) {
        if (field == null) {
            return "this field can't be empty";
        }
        return `the ${field} can't be empty`;
    }
    static outOfLength(field) {
        if (field == null) {
            return "your field length is invalid";
        }
        return `your ${field} length is invalid`;
    }
    static type(type, value) {
        // const start = type.match(/\b[aeuio][a-zA-Z]*/g) ? "an" : "a";
        return `the value ${value} is not a valid ${type}`;
    }
    static notFound(name, value) {
        return `the ${name} with the id = ${value} doesn't exists`;
    }
}
exports.default = validationMessage;
