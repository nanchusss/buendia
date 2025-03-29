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
  width: 100%;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px; /* Añade espacio entre los elementos */
`;

export const Logo = styled.img`
  height: 80px; /* Ajustado a una proporción más adaptable */
  width: auto; /* Mantiene la relación de aspecto */
  margin: 10px; /* Añade espacio alrededor */
  transition: transform 0.5s;

  &:hover {
    transform: rotateX(360deg);
  }

  @media (max-width: 767px) {
    margin: 5px; /* Reduce el margen en dispositivos pequeños */
  }
`;

export const NavbarContainer = styled(Navbar)`
  padding: 10px 20px; /* Ajusta el espacio interno */
  width: 100%;
  height: auto; /* Ajusta automáticamente la altura */
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  top: 0;
  background-color: #ffffff; /* Fondo blanco */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra ligera */

  @media (max-width: 767px) {
    flex-direction: column !important; /* Elementos en columna */
    align-items: flex-start;
    padding: 15px; /* Ajusta el padding para móviles */
  }
`;

export const Button1 = styled(Nav)`
  font-size: 20px;
  flex-grow: 1;
  justify-content: center;

  @media (max-width: 767px) {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px; /* Espaciado entre los elementos */
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
  display: flex;
  flex-direction: row;
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
export const HeaderSpacer = styled.div`
  height: 120px;

  @media (max-width: 767px) {
    height: 100px;
  }
`;
