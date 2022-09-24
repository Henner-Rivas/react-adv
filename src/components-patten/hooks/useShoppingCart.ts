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
      const productInCart = oldProduct[product.id] || { ...product, count: 0 };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldProduct,
          [product.id]: productInCart,
        };
      }
      let { [product.id]: toDelete, ...rest } = oldProduct;

      return { ...rest };
    });
  };

  return { onProductCountChange, shoppingCart };
};

export default useShoppingCart;
