import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
console.log(`Rodando na porta - ${process.env.PORT || 8181}`);

app.listen(`${process.env.PORT || 8182}`);
