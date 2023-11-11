import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./navigation-bar.module.css";

const NavigationBar = () => {
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Split-it</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className={styles.link} to="/">
                Check Bill
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={styles.link} to="/history">
                History
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
