import { Request, Response } from "express";
import ProductDomain from "../domain/Product";
import { IProduct } from "../database/Product";
import ProductController from "../interfaces/Product";

export default class ProductControllerImpl implements ProductController {
  public async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const product: IProduct = req.body;
      const createdProduct = await ProductDomain.create(product);
      res.status(201).json(createdProduct);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  public async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const productId: string = req.params.id;
      const product = await ProductDomain.getById(productId);
      if (product) {
        res.json(product);
      } else {
        res.status(404).send("Product not found");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }

  public async getAllProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await ProductDomain.getAll();
      res.json(products);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  public async updateProductById(req: Request, res: Response): Promise<void> {
    try {
      const productId: string = req.params.id;
      const product: IProduct = req.body;
      const updatedProduct = await ProductDomain.updateById(productId, product);
      if (updatedProduct) {
        res.json(updatedProduct);
      } else {
        res.status(404).send("Product not found");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }

  public async deleteProductById(req: Request, res: Response): Promise<void> {
    try {
      const productId: string = req.params.id;
      const deletedProduct = await ProductDomain.deleteById(productId);
      if (deletedProduct) {
        res.json(deletedProduct);
      } else {
        res.status(404).send("Product not found");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
