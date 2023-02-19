import { writeFile } from "fs";
import path from "path";
export default function saveImage(buffer: Buffer, name: string) {
    writeFile(path.join("images", name), buffer, (err) => {
        if (err) throw err;
    });
}
