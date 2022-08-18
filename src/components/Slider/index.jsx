import { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import { Button } from "react-bootstrap";

export default function Slider(props) {
  //esperamos receber uma props de fotos
  let fotos = props.fotos;
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
  }, [contador, fotos]);

  return (
    <div className={styles.slides}>
      <img className={styles.foto} src={slide.path} alt={slide.description} />
      <div className={styles.controles}>
        <Button
          variant='outline-dark'
          onClick={() => setContador(contador - 1)}
        >
          &#10094;
        </Button>
        <span>
          <strong>{slide.title}</strong>
        </span>
        <Button
          variant='outline-dark'
          onClick={() => setContador(contador + 1)}
        >
          &#10095;
        </Button>
      </div>
    </div>
  );
}
