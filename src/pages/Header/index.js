import styles from "./Header.module.css";

export default function Header() {
  return (
    <nav className="navbar navbar-dark sticky-top navbar-expand-lg" id={styles.navBar}>
    <div className="container-fluid">
      <a className="navbar-brand text-white" href="#">
      <i className="fa-solid fa-water-ladder fa-xl"></i> 
      <span> souza piscinas</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active text-white" aria-current="page" href="#">
              início
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white">disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
