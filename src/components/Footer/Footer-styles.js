import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const FooterCard = styled(Card)`
  background-color: #4d4d4d;
  display: flex;
  border-radius: 0;
  color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterTitle = styled(Card.Title)`
  margin-top: 18px;
  text-align: center;
`;
export const FooterTitle2 = styled(Card.Title)`
  margin-top: 5px;
  font-size: 35px;
  background-color: none;
  text-align: center;
`;

export const FooterButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
