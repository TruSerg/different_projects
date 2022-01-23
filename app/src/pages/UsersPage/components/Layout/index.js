import PropTypes from "prop-types";
import { Container } from "@mui/material";

import MaterialCard from "../../../../commonComponent/MaterialCard";

import styles from "../../../Home/styles.module.scss";

const UsersPageLayout = ({ usersList, handleRemove }) => {
  return (
    <div>
      <Container>
        <h1 className={styles.title}>Users Page</h1>
        <div>
          {usersList.map(({ name, age, city, id }) => (
            <div>
              <MaterialCard
                key={id}
                name={name}
                age={age}
                city={city}
                handleRemove={() => handleRemove(id)}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

UsersPageLayout.propTypes = {
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired,
    })
  ),
};

export default UsersPageLayout;
