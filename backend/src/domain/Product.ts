import Product, { IProduct } from "../database/Product";
import { v4 as uuidv4 } from "uuid";

export default class ProductService {
  // Create a new product
  public static async create(product: IProduct): Promise<IProduct> {
    const newProduct = new Product({ id: uuidv4(), ...product });
    return await newProduct.save();
  }

  // Get a product by ID
  public static async getById(productId: string): Promise<IProduct | null> {
    return await Product.findOne({ id: productId }).exec();
  }

  // Get all products
  public static async getAll(): Promise<IProduct[]> {
    return await Product.find().exec();
  }

  // Update a product by ID
  public static async updateById(
    productId: string,
    product: IProduct
  ): Promise<IProduct | null> {
    return await Product.findOneAndUpdate({ id: productId }, product, {
      new: true,
    }).exec();
  }

  // Delete a product by ID
  public static async deleteById(productId: string): Promise<IProduct | null> {
    return await Product.findOneAndDelete({ id: productId }).exec();
  }
}
