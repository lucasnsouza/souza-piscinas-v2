import styles from "./AboutUs.module.css";
import capa from "../../assets/sobre.png";
import { Helmet } from "react-helmet";

export default function AboutUs() {
  return (
    <section className={styles.sobre}>
      <Helmet>
        <title>Sobre | Souza Piscinas</title>
        <meta
          name='description'
          content='Quer contratar um piscineiro na região de Bauru e Duartina? Contratar piscineiro na região de Bauru.'
        />
        <meta
          name='keywords'
          content='piscina, limpeza, manutenção, piscineiro, bauru, Bauru, Duartina, duartina, orçamento, contato, piscineiro em bauru, piscineiro em duartina, limpeza de piscinas em duartina, limpeza de piscinas em bauru, limpeza piscina bauru duartina'
        />
      </Helmet>
      <div className={styles.conteudo}>
        <h1 className={styles.title}>Souza Piscinas</h1>
        <hr className={styles.hr} />
        <p>
          Antendemos em Duartina e Bauru há mais de três anos. Veja um resumo
          dos serviços que prestamos:
        </p>
        <ul className={styles.listaSobre}>
          <li>limpeza regular</li>
          <li>tratamento de choque</li>
          <li>troca de areia</li>
        </ul>
        <p>
          Oferecemos um serviço de confiança para você poder aproveitar seu
          lazer. Trabalhamos com uma limpeza por semana, que ajuda a manter a
          qualidade da água e economiza o uso de produtos. De acordo com as
          necessidades de cada cliente podemos realizar serviços extras, como
          troca de areia ou pequenos reparos.
        </p>
      </div>
      <div className={styles.capa}>
        <img
          className={styles.capaSobre}
          src={capa}
          alt='piscineiro ilustrado'
        />
      </div>
    </section>
  );
}
