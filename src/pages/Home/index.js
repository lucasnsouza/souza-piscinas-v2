import Header from "../Header";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className="" id={styles.main}>
      <Header />
      <div id={styles.landing}>
        <div className="d-flex position-relative" id={styles.capa}>
          <div className="position-absolute" id={styles.conteudo}>
            <div id={styles.banner}>
              <h1 id={styles.texto}>SOUZA PISCINAS</h1>
              <p>
                <strong>O seu lazer é o nosso trabalho</strong>
              </p>
              <p>
                Trabalhamos para que você possa curtir sua piscina sem dor de
                cabeça!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
