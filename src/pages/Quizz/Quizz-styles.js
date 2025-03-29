import styled from "styled-components";
import { Card, Button, Form } from "react-bootstrap";

export const QuizWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px); /* resta la altura del navbar */
  padding-top: 120px;

  @media (max-width: 767px) {
    height: calc(100vh - 100px);
    padding-top: 100px;
  }
`;

export const QuizCard = styled(Card)`
  width: 100%;
  max-width: 460px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  padding: 30px 20px;
  background-color: white;
  margin-bottom: 100px;
`;

export const Formy = styled(Form)`
  margin-top: 40px;
  padding-right: 40px;
  padding-left: 40px;
  width: 100%;
`;

export const Title = styled(Card.Title)`
  font-size: 24px;
  text-align: center;
  padding: 0 15px;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionButton = styled(Button)`
  margin: 20px auto;
  padding: 15px;
  font-size: 18px;
  border-radius: 5px;
  width: 300px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? "#1B3A57" : "#3C6E91")};
  color: #ffffff;
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? "#163045" : "#2E5A76")};
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${(props) => (props.selected ? "#12283A" : "#254C61")};
    transform: translateY(0);
  }
`;
