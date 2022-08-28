import Capa from "./Capa";
import Conteudo from "./Conteudo";
import styles from "./Home.module.css";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <main id={styles.main}>
      <Helmet>
        <title>Início | Souza Piscinas</title>
        <meta
          name='description'
          content='Um guia rápido para enteder melhor a manutenção e limpeza da sua piscina.'
        />
        <meta
          name='keywords'
          content='piscina, limpeza, manutenção, piscineiro, duartina, bauru'
        />
      </Helmet>
      <Capa />
      <Conteudo />
    </main>
  );
}
