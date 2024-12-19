import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import {
  NavbarContainer,
  Logo,
  NavLinks,
  styles,
  //ButtonsHeader,
  //ButtonsHeader2,
} from "./Header-styles";
import LogoMarca from "..//.//../Images/Logo.jpeg";

const Header = ({
  handleLogin,
  handleShowQuizz,
  handleShowBlog,
  handelShowForm,
}) => {
  //isLoggedIn posee la info de mail
  const isLoggedIn = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("email");
    window.location.reload();
    // Recarga la página para actualizar el estado de inicio de sesión, osea cierra sesión.
  };

  return (
    <NavbarContainer bg="light" expand="lg" className="mb-5">
      <Navbar.Brand
        href="/"
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Logo
          src={LogoMarca}
          alt="Logo"
          style={{ width: "80px", height: "80px", objectFit: "contain" }} // Ajusta el tamaño del logo
        />
        <span
          style={{
            fontSize: "33px",
            color: "#4D4D4D",
            fontWeight: "bold",
            marginBottom: "0px",
          }}
        >
          FINESTRACAT
        </span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavLinks className="mr-auto mt-3 ">
          <Nav.Link style={styles.link} href="/" className="ml-2">
            Inici
          </Nav.Link>

          <Nav.Link onClick={handleShowBlog} href="/blog">
            Blog
          </Nav.Link>
          <Nav.Link onClick={handelShowForm} href="/contacte" className="ml-2">
            Contacte
          </Nav.Link>
          <Nav.Link style={styles.link} href="/productes" className="ml-2">
            Productes
          </Nav.Link>
          <Nav>
            <Button
              variant="success"
              onClick={handleShowQuizz}
              className="m-5 btn-desktop-margin"
            >
              {" "}
              Sol.licitar pressupost
            </Button>
          </Nav>
        </NavLinks>
      </Navbar.Collapse>
    </NavbarContainer>
  );
};

export default Header;
