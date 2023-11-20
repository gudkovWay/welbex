import styles from "./Consult.module.scss";

const Consult = () => {
  return (
    <section className={styles.consult}>
      <div className={styles.consult__left}>
        <h1>
          Зарабатывайте больше <h2>с WELBEX</h2>
        </h1>
        <p>
          Развиваем и контролируем <br /> продажи за вас
        </p>
      </div>
      <div className={styles.consult__right}>
        <h3>
          Вместе с <b> Бесплатной </b> <b>Консультацией </b> мы дарим:
        </h3>
        <article>
          <ul>
            <li>
              <h3> Виджеты </h3> <p> 30 готовых решений </p>
            </li>
            <li>
              <h3> DASHBOARD</h3> <p> с показателями вашего бизнеса</p>
            </li>
            <li>
              <h3> SKYPE АУДИТ</h3> <p> отдела продаж и CRM системы </p>
            </li>
            <li>
              <h3> 35 ДНЕЙ</h3> <p> использования CRM</p>
            </li>
          </ul>
        </article>
        <button type="button" onClick={() => console.log("pressed button")}>
          Получить консультацию
        </button>
      </div>
    </section>
  );
};

export default Consult;
