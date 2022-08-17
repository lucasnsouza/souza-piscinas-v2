import Capa from "./Capa";
import Conteudo from "./Conteudo";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main id={styles.main}>
      <Capa/>
      <Conteudo/>
    </main>
  );
}
