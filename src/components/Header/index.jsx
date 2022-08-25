import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Brand from "../Brand";
import { useEffect, useState } from "react";

export default function Header() {
  const rotas = [
    {
      label: "início",
      to: "/souza-piscinas-v2",
    },
    {
      label: "serviços",
      to: "/souza-piscinas-v2/servicos",
    },
    {
      label: "sobre nós",
      to: "/souza-piscinas-v2/sobre",
    },
  ];

  //começa como falso já que o botão só deve aparecer em telas mobile
  const [toggleMenu, setToggleMenu] = useState(false);
  const [tamanhoDaTela, setTamanhoDaTela] = useState(window.innerWidth);

  const btnNavToggle = () => {
    //a função dá um valor booleano contrario
    //if is false its set for true and vice versa
    setToggleMenu(!toggleMenu);
  };

  //monitora o tamanho da tela e garante que tamanhoDaTela
  //seja atualizado sempre que houver um resize
  useEffect(() => {
    const changeWidth = () => {
      setTamanhoDaTela(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className={styles.navBar}>
      <div className={styles.menu}>
        <div className={styles.divBrandBtn}>
          <Link to='/souza-piscinas-v2' className={styles.brand}>
            <Brand />
          </Link>
          <button onClick={btnNavToggle} className={styles.btnNav}>
            <i className='fa-solid fa-bars fa-xl'></i>
          </button>
        </div>
          {(toggleMenu || tamanhoDaTela > 500) && (
            <ul className={styles.lista}>
              {/* exibe a ul do menu se o toggle for true ou a tela for larga o suficiente */}
              {rotas.map((rota, index) => (
                <li key={index} className={styles.item}>
                  <Link to={rota.to} className={styles.link}>
                    {rota.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
      </div>
    </nav>
  );
}
