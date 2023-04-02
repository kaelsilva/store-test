import { Request, Response } from "express";
import { IProduct } from "../database/Product";

export default interface ProductController {
  createProduct(req: Request, res: Response): Promise<void>;
  getProductById(req: Request, res: Response): Promise<void>;
  getAllProducts(req: Request, res: Response): Promise<void>;
  updateProductById(req: Request, res: Response): Promise<void>;
  deleteProductById(req: Request, res: Response): Promise<void>;
}
