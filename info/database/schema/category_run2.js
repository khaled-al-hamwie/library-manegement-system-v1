const { writeFile } = require("fs");
const path = require("path");

let a =
    "Art Biography Business Chick Lit Children's Christian Classics Comics Contemporary Cookbooks Crime Ebooks Fantasy Fiction Gay and Lesbian Graphic Novels Historical Fiction History Horror Humor and Comedy Manga Memoir Music Mystery Nonfiction Paranormal Philosophy Poetry Psychology Religion Romance Science Science Fiction Self Help Suspense Spirituality Sports Thriller Travel Young Adult";
const obj = [];
[...new Set(a.split(" "))].forEach((book, i) =>
    obj.push({
        category_id: i + 1,
        name: book,
        description: `this is the ${book} category`,
    })
);
writeFile(
    path.join("info", "database", "schema", "category2.json"),
    JSON.stringify(obj),
    (err) => {
        console.log(err);
    }
);
