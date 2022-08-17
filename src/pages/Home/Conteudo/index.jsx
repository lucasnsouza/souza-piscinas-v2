import { useEffect, useState } from "react";
import fotos from "../../../data/fotos.json";
import styles from "./Conteudo.module.css";
import { Button } from "react-bootstrap";

export default function Conteudo() {
  let [slide, setSlide] = useState(fotos[0]);
  let [contador, setContador] = useState(0);

  if (contador === fotos.length) {
    setContador(0);
  }

  if (contador < 0) {
    setContador(fotos.length - 1);
  }

  useEffect(() => {
    setSlide(fotos[contador]);
  }, [contador]);

  return (
    <div className={styles.conteudo}>
      <div className={styles.texto}>
        <div className={styles.apresentacao}>
          <h2 className={styles.titulo}>
            <strong>Guia</strong>
          </h2>
          <hr className={styles.hr} />
          <p>
            Preparamos um guia rápido e básico para você ficar por dentro do que
            é mais importante para manter a sua piscina em ordem.
          </p>
        </div>
        <div className={styles.guia}>
          <p>O que você procura?</p>
          <ul>
            <li>Manutenção regular</li>
            <li>Manutenção peródica</li>
            <li>Serviços extras</li>
          </ul>
        </div>
      </div>
      <div className={styles.slides}>
        <img className={styles.foto} src={slide.path} alt={slide.description} />
        <div className={styles.controles}>
          <Button variant="outline-dark" onClick={() => setContador(contador - 1)}>&#10094;</Button>
          {/* <button onClick={() => setContador(contador - 1)}>&#10094;</button> */}
          <span><strong>{slide.title}</strong></span>
          <Button variant="outline-dark" onClick={() => setContador(contador + 1)}>&#10095;</Button>
        </div>
      </div>
    </div>
  );
}
