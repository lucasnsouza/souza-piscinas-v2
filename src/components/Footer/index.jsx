import Brand from "../Brand";
import styles from "./Footer.module.css";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import clock from "../../assets/clock.svg";

export default function Footer() {
  const anoAtual = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={styles.cartao}>
        <Brand />
        <ul className={styles.lista}>
          <li>
            <strong>contato</strong>
          </li>
          <li className={styles.item}>
            <img src={mail} alt='email' className={styles.svg}/>
            <div>email@email.com</div>
          </li>
          <li className={styles.item}>
            <img src={phone} alt='telefone' className={styles.svg}/>
            <div>(14) 91122-3344</div>
          </li>
          <li className={styles.item}>
            <img src={clock} alt='relógio' className={styles.svg}/>
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
