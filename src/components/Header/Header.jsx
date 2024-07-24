// React
import { NavLink } from "react-router-dom";
// svg
import icon from "./img/emptyFolder.svg";
// styles
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.list__items}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.list__items}>
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>
      <img className={styles.img__person} src={icon} alt="icon" />
    </nav>
  );
};
