import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  padding: 10px;
  color: #333;
  text-align: center;
  text-transform: uppercase;
`;

export const CustomCard = styled.div`
  font-size: 1.8rem;
  padding: 10px 40px;
  margin: 10px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

export const ContainerSection = styled.section`
  display: flex;
  margin-top: 160px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid #ddd;
`;

export const Row = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  justify-content: center;
`;
