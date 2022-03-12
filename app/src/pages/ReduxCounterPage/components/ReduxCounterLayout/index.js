import { Button, Container } from "@mui/material";

import Counter from "../../../../commonComponent/Counter";

import styles from "./styles.module.scss";

const ReduxCounterLayout = ({
  countersList,
  handleCounterCreate,
  handleIncrement,
}) => {
  return (
    <div>
      <h1 className={styles.title}>Redux counters</h1>
      <Container>
        <h2>TOTAL SUM: </h2>
        <h2>TOTAL COUNTERS: {countersList.length}</h2>
        <div className={styles.button}>
          <Button
            className={styles.btn}
            onClick={handleCounterCreate}
            variant="outlined"
            color="success"
          >
            Add counter
          </Button>
          <Button className={styles.btn} variant="outlined" color="error">
            Remove counter
          </Button>
          <Button className={styles.btn} variant="contained">
            Reset
          </Button>
        </div>

        <div>
          {countersList.map(({ id, countValue }) => (
            <div key={id} className={styles.countersWrapper}>
              <Counter
                countValue={countValue}
                handleIncrement={() => handleIncrement(id)}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ReduxCounterLayout;
