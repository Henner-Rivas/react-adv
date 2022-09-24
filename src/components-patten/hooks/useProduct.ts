import { useState, useEffect, useRef } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  count?: number;
}

const useProduct = ({ onChange, product, count = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState(count);
  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }
    const newValue = Math.max(counter + value, 0);

    setCounter(newValue);

    onChange && onChange({ count: newValue, product: product });
  };
  useEffect(() => {
    setCounter(count);
  }, [count]);
  return { counter, increaseBy };
};

export default useProduct;
