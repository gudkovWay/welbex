import styles from "./Footer.module.scss";
import FooterMobile from "./mobile";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__nav}>
          <div className={styles.footer__nav__site}>
            <div className={styles.footer__nav__site__links}>
              <h3>о компании</h3>
              <ul>
                <li>
                  <a href="#!">Партнёрская программа</a>
                </li>
                <li>
                  <a href="#!">Вакансии</a>
                </li>
              </ul>
            </div>

            <div className={styles.footer__nav__site__links}>
              <h3> меню </h3>
              <ul>
                <li>
                  <a href="#!">Расчёт стоимости</a>
                </li>
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
                  <a href="#!">Наши клиенты</a>
                </li>

                <li>
                  <a href="#!">Кейсы</a>
                </li>
                <li>
                  <a href="#!">Благодарственные письма</a>
                </li>
                <li>
                  <a href="#!">Сертификаты</a>
                </li>
                <li>
                  <a href="#!">Блог на Youtube</a>
                </li>
                <li>
                  <a href="#!">Вопрос / Ответ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer__nav__contacts}>
            <div className={styles.footer__nav__contacts__links}>
              <h3>контакты</h3>
              <ul>
                <li>
                  <a href="#!">+7 555 555-55-55</a>
                </li>
                <li className={styles.pixelPerfect}>
                  <a href="#!">
                    <img src="images/icons/telegram.svg" alt="telegram icon" />
                  </a>
                  <a href="#!" className={styles.iconPP}>
                    <img src="images/icons/viber.svg" alt="viber icon" />
                  </a>
                  <a href="#!" className={styles.iconPP}>
                    <img src="images/icons/whatsapp.svg" alt="whatsapp icon" />
                  </a>
                </li>
                <li>
                  <a href="https://yandex.ru/maps/-/CDe0AL-6">
                    Москва, Путевой проезд 3с1, к 902
                  </a>
                </li>
              </ul>
            </div>
            <span className={styles.footer__nav__contacts__copyright}>
              ©WELBEX 2022. Все права защищены. <br />
              <a href="#!">Политика конфиденциальности</a>
            </span>
          </div>
        </div>
      </footer>
      <FooterMobile />
    </>
  );
};

export default Footer;
