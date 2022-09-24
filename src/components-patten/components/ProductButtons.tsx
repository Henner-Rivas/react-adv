import styles from "../styles/styles.module.css";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export const ProductButtons = ({ className }: { className: string }) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);
  console.log(
    "🚀 ~ file: ProductButtons.tsx ~ line 7 ~ ProductButtons ~ maxCount",
    maxCount
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter} </div>
      <button
        className={
          counter === maxCount!
            ? ` ${styles.buttonAdd} buttonAddDisabled `
            : ` ${styles.buttonAdd}  `
        }
        onClick={() => increaseBy(+1)}
      >
        +{" "}
      </button>
    </div>
  );
};
