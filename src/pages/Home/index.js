import Header from "../Header";
import Capa from "./Capa";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main id={styles.main}>
      <Header/>
      <Capa/>
    </main>
  );
}
