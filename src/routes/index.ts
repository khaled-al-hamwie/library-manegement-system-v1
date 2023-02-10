import express from "express";
import sequelize from "../app/providers/databaseProvider";
import router from "./app";
const app = express();
app.use(router);

sequelize
    .sync({ logging: false })
    .then(() => app.listen(process.env.PORT))
    .catch(console.error);
