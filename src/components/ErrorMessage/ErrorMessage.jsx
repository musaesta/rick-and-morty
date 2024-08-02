import styles from "./ErrorMessage.module.css";
export const ErrorMessage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Some kind of error has occurred ;(</h2>
    </div>
  );
};
