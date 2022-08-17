import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Brand from "../Brand";

export default function Header() {
  const rotas = [
    {
      label: 'início',
      to: '/'
    },
    {
      label: 'serviços',
      to: '/serviços'
    },
    {
      label: 'sobre nós',
      to: '/sobre'
    }
  ];

  return (
    <nav className={styles.navBar}>
      <div className={styles.menu}>
        <Link to="/" className={styles.brand}>
        <Brand />
        </Link>
        <ul className={styles.lista}>
          {rotas.map((rota, index) => (
            <li key={index} className={styles.item}>
              <Link to={rota.to} className={styles.link}>{rota.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
