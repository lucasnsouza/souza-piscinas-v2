import styles from './Conteudo.module.css';

export default function Conteudo() {
    return (
        <div className={styles.conteudo}>
            <div className={styles.apresentacao}>
                <p>
                Preparamos um guia rápido e básico para você ficar por dentro do que é mais importante para manter a sua piscina em ordem. Esse guia também pode ajudar você a entender um pouco mais do trabalho do seu piscineiro ou até economizar com a manutenção da piscina.
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
    )
}