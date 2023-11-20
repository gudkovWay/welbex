import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <header className={styles.nav}>
        <div className={styles.nav__site}>
          <div className={styles.nav__site__logo}>
            <a href="/">
              <img src="images/logo.svg" alt="Company logo" />
              <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
            </a>
          </div>
          <div className={styles.nav__site__links}>
            <nav>
              <ul>
                <li>
                  <a href="#!">Услуги</a>
                </li>
                <li>
                  <a href="#!">Виджеты</a>
                </li>
                <li>
                  <a href="#!">Интеграции</a>
                </li>
                <li>
                  <a href="#!">Кейсы</a>
                </li>
                <li>
                  <a href="#!">Сертификаты</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.nav__contacts}>
          <nav>
            <ul>
              <li>
                <a href="tel:+75555555555">+7 555 555-55-55</a>
              </li>
              <li>
                <a href="https://t.me/amoCRM_Official_bot">
                  <img src="/images/icons/telegram.svg" alt="Telegram icon" />
                </a>
              </li>
              <li className={styles.pixelPerfect}>
                <a href="viber://pa?chatURI=amocrm_support">
                  <img src="/images/icons/viber.svg" alt="Viber icon" />
                </a>
              </li>
              <li className={styles.pixelPerfect}>
                <a href="https://wa.me/75555555555">
                  <img src="/images/icons/whatsapp.svg" alt="Whatsapp icon" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
