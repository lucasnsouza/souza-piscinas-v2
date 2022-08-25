import ServicesDescription from "../../components/ServicesDescription";
import styles from "./Services.module.css";
import listaServicos from "../../data/description.json";
import { HashLink } from "react-router-hash-link";
import capa from '../../assets/capa-servicos.jpeg';

export default function Services() {
  return (
    <main>
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
