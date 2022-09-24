import React, { createContext, ReactElement } from "react";
import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import { InitialValues, ProductCartHandlers } from "../interfaces/interfaces";
import {
  ProductContextProps,
  Product,
  onChangeArgs,
} from "../interfaces/interfaces";
interface Props {
  product: Product;
  /*   children?: ReactElement | ReactElement[];
   */
  children: (args: ProductCartHandlers) => JSX.Element;
  className?: string;
  onChange?: (args: onChangeArgs) => void;
  count?: number;
  initailValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({
  onChange,
  children,
  product,
  className,
  count,
  initailValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      count,
      initailValues,
    });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className} `}>
        {children({
          count: counter,
          isMaxCountReached,
          increaseBy,
          maxCount: initailValues?.maxCount,
          reset,
          product: product,
        })}
        <span className={`${styles.productDescription} `}>
          {" "}
          {product.title}
        </span>
      </div>
    </Provider>
  );
};

export default ProductCard;
