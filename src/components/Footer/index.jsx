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
            <a href="mailto:souza@souzapiscinas.com.br">souza@souzapiscinas.com.br</a>
          </li>
          <li className={styles.item}>
            <span className={styles.icons}>
              <i className='fa-brands fa-whatsapp'></i>
            </span>
            <a href="tel:+5514997681293">(14) 99768-1293</a>
          </li>
          <li className={styles.item}>
            <span className={styles.icons}>
              <i className='fa-regular fa-clock'></i>
            </span>
            <div>atendemos de qua a sex das 08:00 às 17:00</div>
          </li>
        </ul>
      </div>
      <hr />
      <div className={styles.developer}>
        <span>criado por <a href="https://github.com/lucasnsouza" target="_blank" rel="noreferrer">lucas souza</a> | 2021-{anoAtual}</span>
      </div>
    </div>
  );
}
