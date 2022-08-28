import styles from "./WhatsappButton.module.css";

export default function WhatsappButton() {
  return (
      <a href='https://web.whatsapp.com/send?phone=%2B5514997681293&text&type=phone_number&app_absent=0' className={styles.whatsapp}>
        <i className='fa-brands fa-whatsapp'></i>
      </a>
  );
}
