import styles from "./Capa.module.css";
import Estacoes from "./Estacoes";

export default function Capa() {
    return (
        <div id={styles.landing}>
        <div className="d-flex position-relative" id={styles.capa}>
          <div className="position-absolute" id={styles.conteudo}>
            <div id={styles.banner}>
              <h1 id={styles.texto}>SOUZA PISCINAS</h1>
              <p>
                <strong>O seu lazer é o nosso trabalho</strong>
              </p>
              <p>
                <Estacoes/>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}