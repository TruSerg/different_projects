import Header from "../Header";

import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
