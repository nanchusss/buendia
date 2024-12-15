import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

// Contenedor principal con fondo oscuro
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px; /* Aumenta el espaciado */
  max-width: 1200px;
  margin: 50px auto;
  color: #f0f0f0; /* Texto claro */

  @media only screen and (max-width: 768px) {
    height: auto; /* Ajuste para pantallas pequeñas */
  }
`;

// Encabezado centrado con colores claros
export const StyledHeader = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  color: #ffffff; /* Blanco para destacar */
  font-size: 3rem;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: #cccccc; /* Gris claro */
  font-size: 1.3rem;
`;

// Estiliza cada carrusel para ocupar más espacio
export const StyledCarousel = styled(Carousel)`
  margin-top: 30px;
  margin-bottom: 30px;

  .carousel-item img {
    max-height: 500px; /* Aumenta la altura */
    object-fit: cover;
    border-radius: 10px; /* Bordes redondeados */
  }
`;

// Línea divisoria entre los carruseles
export const Divider = styled.hr`
  width: 80%; /* Aumenta la longitud */
  border: 0;
  height: 1px;
  background: #444; /* Gris oscuro */
  margin: 40px auto; /* Espaciado alrededor */
`;
