// Img
import leftArrow from "./img/leftArrow.svg";
import rightArrow from "./img/rightArrow.svg";
// Styles
import styles from "./Pagination.module.css";

export const Pagination = ({ handleClickPage, nextPage, prevPage }) => {
  return (
    <div className={styles.container}>
      <button
        onClick={() => handleClickPage(prevPage)}
        className={styles.btn}
        disabled={!prevPage}
      >
        <img className={styles.icon} src={leftArrow} alt="left-arrow" />
      </button>
      <button
        onClick={() => handleClickPage(nextPage)}
        className={styles.btn}
        disabled={!nextPage}
      >
        <img className={styles.icon} src={rightArrow} alt="right-arrow" />
      </button>
    </div>
  );
};
