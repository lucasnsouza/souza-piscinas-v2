import ServicesDescription from "../../components/ServicesDescription";
import styles from "./Services.module.css";
import listaServicos from "../../data/description.json";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";

export default function Services() {
  return (
    <main>
      <Helmet>
        <title>Serviços | Souza Piscinas</title>
        <meta
          name='description'
          content='Para que serve a aspiração da piscina? Precisa limpar a piscina toda semana? Um guia dos principais serviços e produtos para manutenção da piscina.'
        />
        <meta
          name='keywords'
          content='piscina, limpeza, manutenção, piscineiro, aspiração, limpeza das bordas, piscineiro duartina, piscineiro bauru, piscineiro em duartina, piscineiro em bauru, como aspirar piscina, limpeza piscina duartina bauru, piscina verde, piscina cloro, piscina sulfato de alumínio, areia piscina, troca de areia piscina'
        />
      </Helmet>
      <div className={styles.capa}>
        <div className={styles.conteudo}>
          <h1 className={styles.titulo}>
            O que está envolvido na manutenção da sua piscina?
          </h1>
          <h3>
            Esse guia vai abranger alguns dos principais aspectos necessários
            para manter uma piscina em ordem
          </h3>
          <ul className={styles.lista}>
            <li className={styles.itemGuia}>Veja como funciona ...</li>
            <li className={styles.itemGuia}>
              <HashLink smooth to='/souza-piscinas-v2/servicos/#regular'>
                limpeza semanal
              </HashLink>
            </li>
            <li className={styles.itemGuia}>
              <HashLink smooth to='/souza-piscinas-v2/servicos/#extra'>
                manutenção periódica
              </HashLink>
            </li>
            <li className={styles.itemGuia}>
              <HashLink smooth to='/souza-piscinas-v2/servicos/#produtos'>
                produtos utilizados
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
      {listaServicos.map((servico) => (
        <ServicesDescription lista={servico} key={servico.id} />
      ))}
    </main>
  );
}
