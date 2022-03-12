import { useState, useCallback } from "react";

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = useCallback(() => {
    setCount((state) => state + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    if (count > 0) setCount(count - 1);
  }, [count]);

  const handleReset = useCallback(() => setCount(initialCount), []);

  return [count, handleIncrement, handleDecrement, handleReset];
};

export default useCounter;
