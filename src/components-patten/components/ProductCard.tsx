import React, { createContext, ReactElement, useContext } from "react";
import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import {
  ProductContextProps,
  Product,
  onChangeArgs,
} from "../interfaces/interfaces";
interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  onChange?: (args: onChangeArgs) => void;
  count?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({
  onChange,
  children,
  product,
  className,
  count,
}: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, count });
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className} `}>
        {children}
        <span className={`${styles.productDescription} `}>
          {" "}
          {product.title}
        </span>
      </div>
    </Provider>
  );
};

export default ProductCard;
