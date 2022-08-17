import Brand from "../Brand";
import styles from "./Footer.module.css";
import { ReactComponent as Phone } from '../../assets/phone.svg'; 
import { ReactComponent as Mail } from '../../assets/mail.svg'; 
import { ReactComponent as Clock } from '../../assets/clock.svg'; 

export default function Footer() {
    const anoAtual = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={styles.cartao}>
          <Brand />
          <ul className={styles.lista}>
            <li><strong>contato</strong></li>
            <li className={styles.item}>
                <div className={styles.svg}><Mail/></div>
                <div>email@email.com</div>
            </li>
            <li className={styles.item}>
                <div className={styles.svg}><Phone/></div>
                <div>(14) 91122-3344</div>
            </li>
            <li className={styles.item}>
                <div className={styles.svg}><Clock/></div>
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
