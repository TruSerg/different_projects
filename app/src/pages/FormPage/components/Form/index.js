import { Button, Container } from "@mui/material";

import styles from "./styles.module.scss";

const Form = ({
  formData,
  dataToDisplay,
  /*isFormPrinted*/ onFormChange,
  onSubmit,
}) => {
  return (
    <div>
      <Container>
        <h1 className={styles.title}>Form page</h1>
        <div className={styles.formWrapper}>
          <form onSubmit={onSubmit}>
            <label>
              <p>Email</p>
              <input
                value={formData.email}
                onChange={onFormChange}
                name="email"
                type="email"
              />
            </label>
            <label>
              <p>Password</p>
              <input
                value={formData.password}
                onChange={onFormChange}
                name="password"
                type="password"
              />
            </label>
            <div className={styles.btn}>
              <Button type="submit" variant="contained">
                Print form
              </Button>
            </div>
          </form>
        </div>

        <div className={styles.formValueWrapper}>
          <p>Email: {dataToDisplay.email}</p>
          <p>Password: {dataToDisplay.password}</p>
        </div>
      </Container>
    </div>
  );
};

export default Form;
