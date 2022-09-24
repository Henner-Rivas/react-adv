import { useState } from "react";
import { ProductCart, Product } from "../interfaces/interfaces";

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldProduct) => {
      if (count === 0) {
        const { [product.id]: todelete, ...rest } = oldProduct;
        return rest;
      }

      return { ...oldProduct, [product.id]: { ...product, count } };
    });
  };

  return { onProductCountChange, shoppingCart };
};

export default useShoppingCart;
