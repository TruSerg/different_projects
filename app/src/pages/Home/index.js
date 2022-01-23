import React from "react";
import { Container } from "@mui/material";

import styles from "./styles.module.scss";

const HomePage = () => {
  return (
    <div>
      <Container>
        <h1 className={styles.title}>Home Page</h1>
      </Container>
    </div>
  );
};

export default HomePage;
