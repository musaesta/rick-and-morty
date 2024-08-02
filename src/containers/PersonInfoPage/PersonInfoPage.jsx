// React
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// img
import leftrArrow from "../../components/Pagination/img/leftArrow.svg";
// Styles
import styles from "./PersonInfoPage.module.css";
export const PersonInfoPage = () => {
  const { personInfoState } = useSelector((state) => state.personInfoReducer);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper__back}>
        <img
          onClick={goBack}
          className={styles.icon}
          src={leftrArrow}
          alt="leftArrow"
        />
        <span onClick={goBack} className={styles.go__back}>
          Go back
        </span>
      </div>
      <div className={styles.wrapper}>
        <img
          className={styles.personImg}
          src={personInfoState.image}
          alt={personInfoState.name}
        />

        <ul className={styles.list}>
          <li className={styles.list__item}>Name: {personInfoState.name}</li>
          {/* <li className={styles.list__item}>
            Location:{personInfoState.location.name}
          </li> */}
          <li className={styles.list__item}>
            Gender: {personInfoState.gender}
          </li>
          <li className={styles.list__item}>
            Status: {personInfoState.status}
          </li>
          <li className={styles.list__item}>
            Species: {personInfoState.species}
          </li>
        </ul>
      </div>
    </div>
  );
};
