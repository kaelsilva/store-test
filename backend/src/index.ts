import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Product from "./models/Product";
import dbConfig from "./config/config";
import router from "./routes";

dotenv.config();

const app: Express = express();
dbConfig;

const port = process.env.PORT;

app.use(express.json());
app.use("/products", router);

// app.get("/", (request: Request, response: Response) => {
//   response
//     .status(200)
//     .json(
//       new Product(
//         "0b8ec672-3020-4340-931f-0cafc1251b07",
//         "Hambúrguer Clássico",
//         "Hambúrguer Clássico - Um pão macio e fresco, uma carne suculenta e saborosa, queijo derretido e crocante de bacon. Um clássico que nunca falha.",
//         30,
//         "Lanche",
//         "/public/assets/hamburguer-1.jpg"
//       )
//     );
// });

// app.post("/", (request: Request, response: Response) => {
//   const { id, title, description, value, category, imageUrl } = request.body;

//   response
//     .status(201)
//     .json(new Product(id, title, description, value, category, imageUrl));
// });

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
