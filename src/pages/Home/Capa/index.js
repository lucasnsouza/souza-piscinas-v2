import styles from "./Capa.module.css";
import Estacoes from "./Estacoes";

export default function Capa() {
  return (
    <div className={styles.landing}>
      <div className={styles.capa}>
        <div className={styles.conteudo}>
          <div className={styles.banner}>
            <h1 className={styles.texto}>SOUZA PISCINAS</h1>
            <p>
              <strong>O seu lazer é o nosso trabalho</strong>
            </p>
            <Estacoes />
          </div>
        </div>
      </div>
    </div>
  );
}
