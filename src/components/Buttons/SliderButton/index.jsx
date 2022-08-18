import styles from "./SliderButton.module.css";

export default function SliderButton(props) {
  let btn = props.function;
  switch (btn) {
    case "prev":
      btn = "\u{276E}";
      break;
    case "next":
      btn = "\u{276F}";
      break;
    default:
      break;
  }
  let onclick = props.onclick;

  return (
    <button onClick={onclick} className={styles.btn}>
      {btn}
    </button>
  );
}
