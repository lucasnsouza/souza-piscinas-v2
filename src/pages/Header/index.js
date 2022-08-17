import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" className={styles.navBar}>
      <Container>
        <Navbar.Brand href="/">
          <i className="fa-solid fa-water-ladder fa-xl"></i>
          <span> souza piscinas</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">início</Nav.Link>
          <Nav.Link href="#features">serviços</Nav.Link>
          <Nav.Link href="#pricing">contato</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
