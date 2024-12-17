import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

import { NavbarContainer, Logo, NavLinks, styles } from "./Header-styles";
import LogoMarca from "../../Images/Logo.jpeg";

const Header = ({ handleShowQuizz, handleShowBlog, handleShowForm }) => {
  return (
    <NavbarContainer bg="light" expand="lg" className="mb-5">
      <Navbar.Brand
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
          style={{ width: "80px", height: "80px", objectFit: "contain" }}
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
          <Nav.Link as={Link} to="/" className="ml-2">
            Inici
          </Nav.Link>
          <Nav.Link as={Link} to="/blog" onClick={handleShowBlog}>
            Blog
          </Nav.Link>
          <Nav.Link as={Link} to="/contacte" onClick={handleShowForm}>
            Contacte
          </Nav.Link>
          <Nav.Link as={Link} to="/productes">
            Productes
          </Nav.Link>
        </NavLinks>
        <Nav>
          <Button variant="success" className="m-3" onClick={handleShowQuizz}>
            Sol.licitar pressupost
          </Button>
        </Nav>
      </Navbar.Collapse>
    </NavbarContainer>
  );
};

export default Header;
