import { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import SliderButton from "../Buttons/SliderButton";

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
        <SliderButton onclick={() => setContador(contador - 1)} function={'prev'}/>
        <span className={styles.texto}>
          <strong>{slide.title}</strong>
        </span>
        <SliderButton onclick={() => setContador(contador + 1)} function={'next'}/>
      </div>
    </div>
  );
}
