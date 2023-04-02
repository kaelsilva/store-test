import { v4 as uuidv4 } from "uuid";

export default class Product {
  private id: string;
  private title: string;
  private description?: string;
  private value: number;
  private category: string;
  private imageUrl: string;

  constructor(
    id: string,
    title: string,
    description: string,
    value: number,
    category: string,
    imageUrl: string
  ) {
    this.id = id ? id : uuidv4();
    this.title = title || "";
    this.description = description || "";
    this.value = value || 0;
    this.category = category || "";
    this.imageUrl = imageUrl || "";
  }

  public get getProduct(): Object {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      value: this.value,
      category: this.category,
      imageUrl: this.imageUrl,
    };
  }
}
