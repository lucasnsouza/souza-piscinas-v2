import styles from "./ServicesDescription.module.css";
import Slider from "../Slider";

export default function ServicesDescription(props) {
  const lista = props.lista;

  return (
    <section className={styles.section}>
      <div className={styles.servico}>
        <h1 className={styles.title}>{lista.title}</h1>
        <p className={styles.resume}>{lista.resume}</p>
      </div>
      <hr className={styles.hr} />
      <div className={styles.descricao}>
        <ul className={styles.listaServicos}>
          {lista.services.map((item) => (
            <li className={styles.item} key={item.id}>
              <span className={styles.nomeDoServico}>{item.service}</span>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
        <div className={styles.slider}>
            <Slider fotos={lista.photos} />
        </div>
      </div>
    </section>
  );
}
