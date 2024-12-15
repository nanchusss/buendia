import React from "react";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";

import {
  NavbarContainer,
  Logo,
  NavLinks,
  styles,
  //ButtonsHeader,
  //ButtonsHeader2,
} from "./Header-styles";
import LogoMarca from "..//.//../Images/Logo.jpeg";
import { useContext } from "react";
import { MyContext } from "../../Context.js";
import {
  StyledHeader,
  StyledImage,
  StyledTitle,
  StyledSubtitle,
  Fondo,
  GridItem,
  Grid,
  Image,
  Title,
  Container2,
  Btn,
  StyledButton,
  ContainerSection,
  CustomCard,
  CustomCardImg,
  CustomCardTitle,
  CustomCardText,
} from "../PaintPage/PaintPage/PaintPage-Styles.js";
import Image2 from "../PaintPage/PaintPage/images/pareja presupuesto.jpg";
import ofrecer1 from "../PaintPage/PaintPage/images/ofrecer1.png";
import ofrecer2 from "../PaintPage/PaintPage/images/ofrecer2.png";
import ofrecer3 from "../PaintPage/PaintPage/images/ofrecer3.png";
import ofrecer4 from "../PaintPage/PaintPage/images/ofrecer4.png";
import pensamosenti2 from "../PaintPage/PaintPage/images/blog.jpg";
import pensamosenti3 from "../PaintPage/PaintPage/images/contact.jpg";

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
