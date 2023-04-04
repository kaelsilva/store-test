import { Request, Response } from "express";
import ProductRepository from "../repository/ProductRepository";
import { IProduct } from "../database/models/Product";
import ProductController from "../interfaces/Product";

export default class ProductControllerImpl implements ProductController {
  public async createProduct(
    request: Request,
    response: Response
  ): Promise<void> {
    try {
      const product: IProduct = request.body;
      const createdProduct = await ProductRepository.create(product);
      response.status(201).json(createdProduct);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  public async getProductById(
    request: Request,
    response: Response
  ): Promise<void> {
    try {
      const productId: string = request.params.id;
      const product = await ProductRepository.getById(productId);
      if (product) {
        response.json(product);
      } else {
        response.status(404).json("Product not found");
      }
    } catch (error) {
      response.status(500).json({ error });
    }
  }

  public async getAllProducts(
    request: Request,
    response: Response
  ): Promise<void> {
    try {
      const products = await ProductRepository.getAll();
      response.json(products);
    } catch (error) {
      response.status(500).json({ error });
    }
  }

  public async updateProductById(
    request: Request,
    response: Response
  ): Promise<void> {
    try {
      const productId: string = request.params.id;
      const product: IProduct = request.body;
      const updatedProduct = await ProductRepository.updateById(
        productId,
        product
      );
      if (updatedProduct) {
        response.json(updatedProduct);
      } else {
        response.status(404).json("Product not found");
      }
    } catch (error) {
      response.status(500).json({ error });
    }
  }

  public async deleteProductById(
    request: Request,
    response: Response
  ): Promise<void> {
    try {
      const productId: string = request.params.id;
      const deletedProduct = await ProductRepository.deleteById(productId);
      if (deletedProduct) {
        response.status(200).json('Product deleted successfully');
      } else {
        response.status(404).json("Product not found");
      }
    } catch (error) {
      response.status(500).json({ error });
    }
  }
}
