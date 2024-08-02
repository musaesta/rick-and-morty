// Redux
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// Components
import { Pagination } from "../Pagination/Pagination";
// SLices
import { setPersonInfo } from "../../store/reducers/personInfoReducers";
// styles
import styles from "./CharactersList.module.css";

export const CharactersList = ({
  characters,
  handleClickPage,
  nextPage,
  prevPage,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Pagination
        handleClickPage={handleClickPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <ul className={styles.list}>
        {characters.map((el) => {
          return (
            <li
              onClick={() => dispatch(setPersonInfo(el))}
              className={styles.list__items}
              key={el.id}
            >
              <Link className={styles.link} to="/info">
                <span className={styles.name__person}>{el.name}</span>
              </Link>
              <Link className={styles.link} to="/info">
                <img
                  className={styles.img__person}
                  src={el.image}
                  alt={el.name}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
