export interface IProduct extends Document {
  title: string;
  description: string;
  value: number;
  category: string;
  imageUrl: string;
}
