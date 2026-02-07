import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { dbConnection } from "./database";
import productRouter from "../routes/productRoutes";
import { exceptionError, notFound } from "../middleware/errorHandler";
dotenv.config();

async function main() {
  const PORT = process.env.PORT || 5000;
  await dbConnection();
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", productRouter);

  notFound(app)
  exceptionError(app)
  app.listen(PORT, () => {
    console.log(`server on run: http://localhost:${PORT}`);
  });
}
main();
