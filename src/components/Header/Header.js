import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoMarca from "../../Images/Logo.jpeg";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-5">
      <Navbar.Brand
        as={Link}
        to="/"
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img
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
        <Nav className="mr-auto mt-3">
          <Nav.Link as={Link} to="/">
            Inici
          </Nav.Link>
          <Nav.Link as={Link} to="/blog">
            Blog
          </Nav.Link>
          <Nav.Link as={Link} to="/contacte">
            Contacte
          </Nav.Link>
          <Nav.Link as={Link} to="/productes">
            Productes
          </Nav.Link>
        </Nav>
        <Nav>
          <Button
            variant="success"
            className="m-3"
            onClick={() => (window.location.hash = "#/quizz")}
          >
            Sol·licitar pressupost
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
