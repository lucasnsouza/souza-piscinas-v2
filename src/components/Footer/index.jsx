import Brand from "../Brand";
import styles from "./Footer.module.css";

export default function Footer() {
  const anoAtual = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={styles.cartao}>
        <Brand />
        <ul className={styles.lista}>
          <li className={styles.item}>
            <strong>contato</strong>
          </li>
          <li className={styles.item}>
            <span className={styles.icons}>
              <i className='fa-regular fa-envelope'></i>
            </span>
            <div>email@email.com</div>
          </li>
          <li className={styles.item}>
            <span className={styles.icons}>
              <i class='fa-brands fa-whatsapp'></i>
            </span>
            <div>(14) 91122-3344</div>
          </li>
          <li className={styles.item}>
            <span className={styles.icons}>
              <i class='fa-regular fa-clock'></i>
            </span>
            <div>atendemos de qua a sex das 08:00 às 17:00</div>
          </li>
        </ul>
      </div>
      <hr />
      <div className={styles.developer}>
        <span>criado por lucas souza | 2021-{anoAtual}</span>
      </div>
    </div>
  );
}
