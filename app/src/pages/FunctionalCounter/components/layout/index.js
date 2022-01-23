import { Button, Container } from "@mui/material";

import Counter from "../../../../commonComponent/Counter";

import styles from "./styles.module.scss";

const FunctionalCounterLayout = ({
  countValue,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleGoToUsers,
}) => {
  return (
    <div>
      <Container>
        <h1 className={styles.title}>Functional Counter</h1>
        <div className={styles.btn}>
          <Button onClick={handleGoToUsers} variant="outlined" color="primary">
            Go to users
          </Button>
        </div>
        <Counter
          countValue={countValue}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleReset={handleReset}
        />
      </Container>
    </div>
  );
};

export default FunctionalCounterLayout;
