import styles from './Services.module.css';

export default function Services() {
    return (
        <div className={styles.capa}>
            <div className={styles.conteudo}>
                <h1 className={styles.titulo}>O que está envolvido na manutenção da sua piscina?</h1>
                <h3>Esse guia vai abranger alguns dos principais aspectos necessários para manter uma piscina em ordem</h3>
                <ul className={styles.lista}>
                    <li className={styles.itemGuia}>Veja como funciona ...</li>
                    <li className={styles.itemGuia}>limpeza semanal</li>
                    <li className={styles.itemGuia}>manutenção periódica</li>
                    <li className={styles.itemGuia}>produtos utilizados</li>
                </ul>
            </div>
        </div>
    );
}