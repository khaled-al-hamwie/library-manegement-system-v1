import inflection from "inflection";

class validationMessage {
    static empty(field: string | null) {
        if (field == null) {
            return "this field can't be empty";
        }
        return `the ${field} can't be empty`;
    }
    static outOfLength(field: string | null) {
        if (field == null) {
            return "your field length is invalid";
        }
        return `your ${field} length is invalid`;
    }
    static type(type: string, value: string) {
        // const start = type.match(/\b[aeuio][a-zA-Z]*/g) ? "an" : "a";
        return `the value ${value} is not a valid ${type}`;
    }
    static notFound(name: string, value: string) {
        return `the ${name} with the id = ${value} doesn't exists`;
    }
}
export default validationMessage;
