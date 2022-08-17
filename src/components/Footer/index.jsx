import Brand from "../Brand";
import styles from "./Footer.module.css";

export default function Footer() {
    const anoAtual = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={styles.cartao}>
          <Brand />
          <ul className={styles.lista}>
            <li><strong>Contato</strong></li>
            <li>email@email.com</li>
            <li>(14) 91122-3344</li>
            <li>Atendemos de qua a sex das 08:00 às 17:00</li>
          </ul>
      </div>
      <hr />
      <div className={styles.developer}>
        <span>Desenvolvido por Lucas Souza | 2021-{anoAtual}</span>
      </div>
    </div>
  );
}
