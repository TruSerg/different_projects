import { Button } from "@mui/material";
import { memo } from "react";

import styles from "./styles.module.scss";

const UserCard = ({ name, age, city, handleRemove }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{`${name} - ${age}`}</h1>
      <p>I'm from {city}</p>
      <Button onClick={handleRemove} variant="contained" color="error">
        Delete
      </Button>
    </div>
  );
};

export default memo(UserCard);
