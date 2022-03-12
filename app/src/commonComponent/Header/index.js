import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";

import { ROUTES } from "../../routes/routeNames";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Container maxWidth="xl">
        <Link className={styles.button} to={ROUTES.HOME}>
          <Button variant="contained" color="success">
            Home
          </Button>
        </Link>
        <Link className={styles.button} to={ROUTES.USERS_PAGE}>
          <Button variant="contained" color="success">
            Users
          </Button>
        </Link>
        <Link className={styles.button} to={ROUTES.COUNTER_PAGE}>
          <Button variant="contained" color="success">
            Counter
          </Button>
        </Link>
        <Link className={styles.button} to={ROUTES.FUNCTIONAL_COUNTER}>
          <Button variant="contained" color="success">
            Functional Counter
          </Button>
        </Link>
        <Link className={styles.button} to={ROUTES.COUNTER_OF_COUNTERS}>
          <Button variant="contained" color="success">
            Counters manager
          </Button>
        </Link>
        <Link className={styles.button} to={ROUTES.REDUX_COUNTER}>
          <Button variant="contained" color="success">
            Redux counter
          </Button>
        </Link>
        <Link className={styles.button} to={ROUTES.FORM}>
          <Button variant="contained" color="success">
            Forms
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default Header;
