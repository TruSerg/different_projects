import { Container } from "@mui/material";
import styles from "../../../../commonComponent/Counter/styles.module.scss";
import Counter from "../../../../commonComponent/Counter";

const CounterPageLayout = ({
  countValue,
  parityType,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <div>
      <Container>
        <h1 className={styles.title}>Counter Page</h1>
        <Counter
          countValue={countValue}
          parityType={parityType}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleReset={handleReset}
        />
      </Container>
    </div>
  );
};

export default CounterPageLayout;
