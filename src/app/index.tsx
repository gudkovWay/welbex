import styles from "./App.module.scss";

const AppBackground = () => {
  return (
    <>
      <div className={styles.purpleBall}></div>
      <div className={styles.purpleLight}></div>
      <div className={styles.rightBall}></div>
      <div className={styles.rightLight}></div>
      <div className={styles.rightBallSmall}></div>
    </>
  );
};

export default AppBackground;
