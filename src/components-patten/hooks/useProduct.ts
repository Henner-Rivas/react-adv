import { useState, useEffect, useRef } from "react";
import { Product, onChangeArgs, InitialValues } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  count?: number;
  initailValues?: InitialValues;
}

const useProduct = ({
  onChange,
  product,
  count = 0,
  initailValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState(initailValues?.count || count);
  console.log(initailValues?.maxCount);
  const isMonted = useRef(false);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    if (newValue > (initailValues?.maxCount || 1000)) {
      return;
    }
    setCounter(newValue);

    onChange && onChange({ count: newValue, product: product });
  };

  useEffect(() => {
    isMonted.current = true;
  }, []);
  useEffect(() => {
    if (!!isMonted.current) return;
    setCounter(count);
  }, [count]);
  const reset = () => {
    setCounter(initailValues?.count || count);
  };
  return {
    counter,
    increaseBy,
    maxCount: initailValues?.maxCount,
    isMaxCountReached:
      !!initailValues?.maxCount && initailValues.maxCount === counter,
    reset,
  };
};

export default useProduct;
