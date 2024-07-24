// styles
import styles from "./CharactersList.module.css";

export const CharactersList = ({ characters }) => {
  return (
    <ul className={styles.list}>
      {characters.map(({ name, image, id }) => {
        return (
          <li className={styles.list__items} key={id}>
            <span className={styles.name__person}>{name}</span>
            <img className={styles.img__person} src={image} alt={name} />
          </li>
        );
      })}
    </ul>
  );
};
