import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

export const Usuario = styled.div`
  padding: 20px;
  margin: 10px;
`;
export const StyledMenu = styled.div`
  width: 250px;
`;
export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  height: 100px;
  width: 100px;
  top: 10px;
  left: 10px;
  transition: transform 0.5s;

  &:hover {
    transform: rotateX(360deg);
  }
  @media (max-width: 767px) {
    left: 0px;
  }
`;

export const NavbarContainer = styled(Navbar)`
  padding-right: 20px;
  width: 100%;
  height: auto; /* Ajusta automáticamente la altura */
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Centra los elementos verticalmente */
  z-index: 10;
  top: 0;
  background-color: #ffffff; /* Fondo blanco para mayor claridad */

  @media (max-width: 767px) {
    flex-direction: column; /* Los elementos se organizan en columna */
    align-items: flex-start; /* Alineación a la izquierda */
    padding: 10px; /* Añade espacio interno */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Añade sombra para distinguirlo */
  }
`;

export const Button1 = styled(Nav)`
  font-size: 32px;
  margin-left: 10%;
  margin-right: 10%;
  flex-grow: 1;
  justify-content: center;
  @media (max-width: 767px) {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: stretch; /* Asegura que los elementos ocupen toda la línea */
    gap: 5px; /* Espaciado entre elementos */
    background-color: rgb(250, 247, 247);
  }
`;

export const ButtonsHeader = styled.div`
  position: absolute;
  top: 25px;
  right: 10px;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const ButtonsHeader2 = styled.div`
  position: absolute;
  width: auto;
  flex-direction: row;
  display: flex;
  top: 25px;
  right: 50px;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const styles = {
  link: {
    marginLeft: "10px",
  },
};
