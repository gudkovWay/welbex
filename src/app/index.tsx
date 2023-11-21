import styles from "./App.module.scss";

const AppBackground = () => {
  return (
    <>
      <div className={styles.whiteLight}></div>
      <div className={styles.purpleBall}></div>
      <div className={styles.purpleLight}></div>
      <div className={styles.redBall}></div>
      <div className={styles.redLight}></div>
      <div className={styles.redBallSmall}></div>
    </>
  );
};

export default AppBackground;
