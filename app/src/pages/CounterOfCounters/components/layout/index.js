import { Button, Container } from "@mui/material";

import Counter from "../../../../commonComponent/Counter";

import styles from "./styles.module.scss";
import { useMemo } from "react";

const CounterOfCountersLayout = ({
  countersList,
  handleCreateCounter,
  handleCounterRemove,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleCountersClear,
}) => {
  const totalSum = useMemo(() => {
    return countersList.reduce(
      (result, { countValue }) => result + countValue,
      0
    );
  }, [countersList]);
  return (
    <div>
      <h1 className={styles.title}>Counters manager</h1>
      <Container>
        <h2>TOTAL SUM: {totalSum}</h2>
        <h2>TOTAL COUNTERS: {countersList.length}</h2>
        <div className={styles.button}>
          <Button
            className={styles.btn}
            onClick={handleCreateCounter}
            variant="outlined"
            color="success"
          >
            Add counter
          </Button>
          <Button
            className={styles.btn}
            onClick={handleCountersClear}
            variant="contained"
          >
            Reset
          </Button>
        </div>
        <div>
          {countersList.map((counter, index) => (
            <div className={styles.countersWrapper}>
              <Counter
                key={index}
                countValue={counter.countValue}
                handleIncrement={() => handleIncrement(index)}
                handleDecrement={() => handleDecrement(index)}
                handleReset={() => handleReset(index)}
                handleCounterRemove={() => handleCounterRemove(index)}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CounterOfCountersLayout;
