import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavbarContainer, Logo, NavLinks, styles } from "./Header-styles";
import LogoMarca from "../../Images/Logo.jpeg";

const Header = ({
  showHome,
  showBlog,
  showContact,
  showProducts,
  handleShowQuizz,
}) => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    window.location.reload();
  };

  return (
    <NavbarContainer bg="light" expand="lg" className="mb-5">
      <Navbar.Brand
        href="#"
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
          <Nav.Link style={styles.link} onClick={showHome}>
            Inici
          </Nav.Link>
          <Nav.Link style={styles.link} onClick={showBlog}>
            Blog
          </Nav.Link>
          <Nav.Link style={styles.link} onClick={showContact}>
            Contacte
          </Nav.Link>
          <Nav.Link style={styles.link} onClick={showProducts}>
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
