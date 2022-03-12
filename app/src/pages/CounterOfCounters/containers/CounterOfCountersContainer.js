import { useCallback, useState } from "react";

import CounterOfCountersLayout from "../components/layout";

const CounterOfCountersContainer = () => {
  const [countersList, setCountersList] = useState([]);

  const handleCreateCounter = useCallback(() => {
    const newCounter = {
      countValue: 0,
    };

    setCountersList((state) => {
      const updatedCounters = state.map(({ countValue }) => ({
        countValue: countValue % 2 === 0 ? countValue + 1 : countValue,
      }));

      return [...updatedCounters, newCounter];
    });
  }, [countersList]);

  const handleCounterRemove = useCallback((index) => {
    setCountersList((state) => {
      const copy = [...state];

      copy.splice(index, 1);

      return copy.map(({ countValue }) => ({
        countValue: countValue % 2 !== 0 ? countValue - 1 : countValue,
      }));
    });
  }, []);

  const handleIncrement = useCallback((counterIndex) => {
    setCountersList((state) => {
      return state.map((counter, index) => ({
        countValue:
          counterIndex === index ? counter.countValue + 1 : counter.countValue,
      }));
    });
  }, []);

  const handleDecrement = useCallback(
    (counterIndex) => {
      if (countersList[counterIndex].countValue > 0) {
        setCountersList((state) => {
          return state.map((counter, index) => ({
            countValue:
              counterIndex === index
                ? counter.countValue - 1
                : counter.countValue,
          }));
        });
      }
    },
    [countersList]
  );

  const handleReset = useCallback((counterIndex) => {
    setCountersList((state) => {
      return state.map((counter, index) => ({
        countValue: counterIndex === index ? 0 : counter.countValue,
      }));
    });
  }, []);

  const handleCountersClear = useCallback(() => {
    setCountersList([]);
  }, []);

  return (
    <CounterOfCountersLayout
      countersList={countersList}
      handleCreateCounter={handleCreateCounter}
      handleCounterRemove={handleCounterRemove}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
      handleCountersClear={handleCountersClear}
    />
  );
};

export default CounterOfCountersContainer;
