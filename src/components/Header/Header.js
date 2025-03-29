import React, { useState } from "react";
import { Navbar, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import LogoMarca from "..//.//../Images/Logo.jpeg";

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-end; /* Alinea el menú a la derecha en mobile */
  }
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
  margin-right: 10px;
`;

const Button1 = styled(Button)`
  font-size: 25px;
  flex-grow: 1;
  text-align: center;
  background: none;
  border: none;
  color: #000;

  &:hover {
    background-color: rgb(255, 250, 250) !important;
    color: #000;
  }

  @media (max-width: 767px) {
    margin: 5px 0;
    text-align: right;
    font-size: 18px;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false); // Control del menú

  const handleNavigation = (path) => {
    if (location.pathname === path) {
      navigate("/", { replace: true });
      setTimeout(() => navigate(path), 0);
    } else {
      navigate(path);
    }

    // Cierra el menú en mobile
    setExpanded(false);
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      expanded={expanded}
      className="mb-5"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "20px 30px",
        position: "fixed",
        top: 0,
        zIndex: 10,
      }}
    >
      {/* Logo */}
      <Navbar.Brand
        onClick={() => handleNavigation("/")}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Logo src={LogoMarca} alt="Logo" />
        <span
          style={{
            fontSize: "33px",
            color: "#4D4D4D",
            fontWeight: "bold",
          }}
        >
          FINESTRACAT
        </span>
      </Navbar.Brand>

      {/* Toggle */}
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      />

      {/* Menú */}
      <Navbar.Collapse id="basic-navbar-nav">
        <MenuContainer>
          <Button1 onClick={() => handleNavigation("/inici")}>Inici</Button1>
          <Button1 onClick={() => handleNavigation("/blog")}>Blog</Button1>
          <Button1 onClick={() => handleNavigation("/contacte")}>
            Contacte
          </Button1>
          <Button1 onClick={() => handleNavigation("/productes")}>
            Productes
          </Button1>
          <Button
            variant="success"
            style={{ whiteSpace: "nowrap" }}
            onClick={() => handleNavigation("/quizz")}
          >
            Sol·licitar pressupost
          </Button>
        </MenuContainer>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
