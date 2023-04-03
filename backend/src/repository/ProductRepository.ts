import { IProduct } from "../database/models/Product";
import Product from "../database/schemas/Product";
import { v4 as uuidv4 } from "uuid";

export default class ProductRepository {
  public static async create(product: IProduct): Promise<IProduct> {
    const newProduct = new Product({ id: uuidv4(), ...product });
    return await newProduct.save();
  }

  public static async getById(productId: string): Promise<IProduct | null> {
    return await Product.findOne({ id: productId }).exec();
  }

  public static async getAll(): Promise<IProduct[]> {
    return await Product.find().exec();
  }

  public static async updateById(
    productId: string,
    product: IProduct
  ): Promise<IProduct | null> {
    return await Product.findOneAndUpdate({ id: productId }, product, {
      new: true,
    }).exec();
  }

  public static async deleteById(productId: string): Promise<IProduct | null> {
    return await Product.findOneAndDelete({ id: productId }).exec();
  }
}
