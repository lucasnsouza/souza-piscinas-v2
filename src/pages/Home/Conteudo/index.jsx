import fotos from "../../../data/fotos.json";
import styles from "./Conteudo.module.css";
import Slider from "../../../components/Slider";

export default function Conteudo() {

  return (
    <div className={styles.conteudo}>
      <div className={styles.texto}>
        <div className={styles.apresentacao}>
          <h2 className={styles.titulo}>
            <strong>Guia</strong>
          </h2>
          <hr className={styles.hr} />
          <p>
            Preparamos um guia rápido e básico para você ficar por dentro do que
            é mais importante para manter a sua piscina em ordem.
          </p>
        </div>
        <div className={styles.guia}>
          <p>O que você procura?</p>
          <ul>
            <li>Manutenção regular</li>
            <li>Manutenção peródica</li>
            <li>Serviços extras</li>
          </ul>
        </div>
      </div>
      <Slider  fotos={fotos}/>
    </div>
  );
}
