import fotos from "../../../data/fotos.json";
import styles from "./Conteudo.module.css";
import Slider from "../../../components/Slider";
import { HashLink } from "react-router-hash-link";

export default function Conteudo() {
  const rotasServicos = [
    {
      label: "Manutenção semanal",
      path: "/souza-piscinas-v2/servicos#regular",
    },
    {
      label: "Manutenção peródica",
      path: "/souza-piscinas-v2/servicos#extra",
    },
    {
      label: "Produtos e equipamentos",
      path: "/souza-piscinas-v2/servicos#produtos",
    },
  ];
  return (
    <div className={styles.conteudo}>
      <div className={styles.texto}>
        <div className={styles.apresentacao}>
          <h2 className={styles.titulo}>Guia do site</h2>
          <hr className={styles.hr} />
          <p>
            Preparamos um guia rápido e básico para você ficar por dentro do que
            é mais importante para manter a sua piscina em ordem.
          </p>
        </div>
        <div className={styles.guia}>
          <p>O que você procura?</p>
          <ul className={styles.lista}>
            {rotasServicos.map((rota) => (
              <li className={styles.item}>
                <HashLink smooth to={rota.path} className={styles.link}>
                  {rota.label} <i class='fa-solid fa-square-arrow-up-right'></i>
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.slider}>
        <Slider fotos={fotos} />
      </div>
    </div>
  );
}
