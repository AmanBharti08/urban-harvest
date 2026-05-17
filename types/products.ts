export interface Product {
  id: number;
  item: string;
  category: string;
  price: number;
  unit: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}