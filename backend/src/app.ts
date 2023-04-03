import express, { Express } from "express";
import dotenv from "dotenv";
import dbConfig from "./config/config";
import router from "./routes";
import cors from "cors";

const app: Express = express();
dbConfig;

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/products", router);

export default app;
