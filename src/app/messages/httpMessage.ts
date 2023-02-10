class httpMessage {
    static validation(): string {
        return "validation error";
    }
    static create(item: string): string {
        const start: string = item.match(/\b[aeuio][a-zA-Z]*/g) ? "an" : "a";
        return `${start} ${item} has been created`;
    }
    static server(): string {
        return "server error";
    }
    static notFound(): string {
        return "not found error";
    }
    static fetch(): string {
        return "your data has been fetched successfully";
    }
}
export default httpMessage;
