import styles from "../styles/styles.module.css";
import React, { createContext, ReactElement, useContext } from "react";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({
  img = "",
  className,
}: {
  img: string;
  className?: string;
}) => {
  const { product } = useContext(ProductContext);
  let imgToShow = img ? img : product.img;
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow ? imgToShow : noImage}
      alt="Coffee"
    />
  );
};