/** This is an product interface*/
export interface IProduct {
  id: string;
  title: string;
  description?: string;
  value: number;
  category: string;
  imageUrl: string;
  itemInCart?: boolean;
  addItemToCart?: ({}: ICartItem) => void;
  removeItemFromCart?: (itemId: string) => void;
}

/** This is an cart item interface, which 'itemId' represents 'id' and 'itemValue' represents 'value' from IProduct*/
export interface ICartItem {
  itemId?: string;
  itemValue: number;
}

/** This is an cart interface, which contains a list of itens and total value represents the sum of the values from the itens*/
export interface ICart {
  items: ICartItem[];
  totalValue: number;
}
