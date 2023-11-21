import styles from "./Consult.module.scss";

const ConsultMobile = () => {
  return (
    <section className={styles.consult__mobile}>
      <div className={styles.consult__mobile__top}>
        <h1>
          Зарабатывайте больше <br />
          <b> c WELBEX </b>
        </h1>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>
      <div className={styles.consult__mobile__bottom}>
        <h2>
          Вместе с <b> бесплатной</b> <b>консультанцией</b> мы дарим:
        </h2>
        <ul>
          <li>
            <b>&#8212;</b> skype аудит
          </li>
          <li>
            <b>&#8212;</b> 30 виджетов
          </li>
          <li>
            <b>&#8212;</b> dashboard
          </li>
          <li>
            <b>&#8212;</b> месяц amocrm
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ConsultMobile;
