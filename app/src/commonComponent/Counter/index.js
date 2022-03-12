import { Button } from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const Counter = ({
  countValue,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleCounterRemove,
}) => {
  const isEven = countValue % 2 === 0;

  return (
    <div
      className={styles.counterWrapper}
      style={{ backgroundColor: isEven ? "#70b99d" : "#aadae8" }}
    >
      <div className={styles.btn_remove}>
        <Button color="error" onClick={handleCounterRemove}>
          <CancelPresentationIcon fontSize="large" />
        </Button>
      </div>
      <div className={styles.display}>{countValue}</div>
      <div className={styles.display}>{isEven ? "even" : "odd"}</div>
      <div>
        <Button
          onClick={handleDecrement}
          variant="contained"
          color="primary"
          className={styles.btn}
        >
          -
        </Button>
        <Button
          onClick={handleReset}
          variant="contained"
          color="primary"
          className={styles.btn}
        >
          Reset
        </Button>
        <Button
          onClick={handleIncrement}
          variant="contained"
          color="primary"
          className={styles.btn}
        >
          +
        </Button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number,
  parityType: PropTypes.string,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  handleReset: PropTypes.func,
};

export default Counter;
