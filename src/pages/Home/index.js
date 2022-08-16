import Header from "../Header";
import Capa from "./Capa";
import Conteudo from "./Conteudo";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main id={styles.main}>
      <Header/>
      <Capa/>
      <Conteudo/>
    </main>
  );
}
