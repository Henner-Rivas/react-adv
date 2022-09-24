import { ReactElement } from "react";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}
export interface ProductCart extends Product {
  count: number;
}