import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// FooterCard con altura mínima forzada hacia abajo
export const FooterCard = styled(Card)`
  background-color: #4d4d4d;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0;
  padding: 12px 10px;
  gap: 6px;
  width: 100%;

  /* Hacemos que empuje hacia el fondo si no hay suficiente contenido */
  margin-top: auto;

  @media (max-width: 767px) {
    padding: 10px 8px;
    gap: 4px;
  }
`;

export const FooterTitle2 = styled(Card.Title)`
  font-size: 18px;
  margin: 4px 0;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 16px;
    margin: 2px 0;
  }
`;

export const FooterTitle = styled(Card.Title)`
  font-size: 14px;
  margin: 2px 0;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 13px;
    margin: 1px 0;
  }
`;

export const FooterButton = styled(Button)`
  margin: 8px 0 4px 0;
  padding: 6px 12px;
  font-size: 14px;

  @media (max-width: 767px) {
    font-size: 12px;
    padding: 4px 10px;
    margin: 6px 0 2px 0;
  }
`;
