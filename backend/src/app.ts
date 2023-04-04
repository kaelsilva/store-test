import express, { Express } from "express";
import dbConfig from "./config/config";
import router from "./routes";
import cors from "cors";
import swaggerSpecs from "./swagger";

const app: Express = express();
dbConfig;

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api-docs", swaggerSpecs);
app.use("/products", router);

export default app;
