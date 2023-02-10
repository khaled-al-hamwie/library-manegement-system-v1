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
    static type(type: string) {
        const start = type.match(/\b[aeuio][a-zA-Z]*/g) ? "an" : "a";
        return `please provide ${start} ${type} value`;
    }
}
export default validationMessage;
