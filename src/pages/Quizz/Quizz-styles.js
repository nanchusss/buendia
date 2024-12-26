import styled from "styled-components";
import { Card, Button, Form } from "react-bootstrap";

export const QuizCard = styled(Card)`
  margin: auto;
  margin-top: 15%;
  margin-bottom: 15%;
  max-width: 460px;
  min-height: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  @media (max-width: 767px) {
    margin-top: 180px;
  }
`;
export const Formy = styled(Form)`
  margin-top: 70px;
  padding-right: 40px;
  padding-left: 40px;
`;

export const Title = styled(Card.Title)`
  font-size: 24px;
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 30px;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-bottom: 30px;
`;

export const OptionButton = styled(Button)`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px;
  font-size: 18px;
  border-radius: 5px; /* Bordes ligeramente redondeados */
  width: 300px;
  border: none;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.selected ? "#1B3A57" : "#3C6E91"}; /* Azul petróleo o azul claro */
  color: #ffffff; /* Texto blanco */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Efecto suave en hover */
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.selected ? "#163045" : "#2E5A76"}; /* Color más oscuro en hover */
    transform: translateY(-2px); /* Ligero levantamiento al pasar el ratón */
  }

  &:active {
    background-color: ${(props) =>
      props.selected
        ? "#12283A"
        : "#254C61"}; /* Color más oscuro al hacer clic */
    transform: translateY(0); /* Restaura el botón al clic */
  }
`;
