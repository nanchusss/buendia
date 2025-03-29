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
  gap: 15px;
`;

export const Logo = styled.img`
  height: 80px;
  width: auto;
  margin: 10px;
  transition: transform 0.5s;
  cursor: pointer;

  &:hover {
    transform: rotateX(360deg);
  }

  @media (max-width: 767px) {
    margin: 5px;
  }
`;

export const NavbarContainer = styled(Navbar)`
  padding: 10px 20px;
  width: 100%;
  height: auto;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  top: 0;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-end;
    padding: 15px;
  }
`;

export const StyledCollapse = styled.div`
  width: 100%;
  display: flex !important;
  justify-content: flex-end;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-end; /* Alinea el menú desplegable hacia la derecha */
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
    gap: 10px;
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

export const HeaderSpacer = styled.div`
  height: 120px;

  @media (max-width: 767px) {
    height: 100px;
  }
`;

export const styles = {
  link: {
    marginLeft: "10px",
  },
};
