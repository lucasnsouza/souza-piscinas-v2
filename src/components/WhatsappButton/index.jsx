import styles from "./WhatsappButton.module.css";

export default function WhatsappButton() {
  return (
      <a href='https://wa.me/5514997681293' className={styles.whatsapp} target="_blank" rel="noreferrer">
        <i className='fa-brands fa-whatsapp'></i>
      </a>
  );
}
