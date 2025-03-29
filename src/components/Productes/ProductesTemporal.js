import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import { StyledContainer, StyledCarousel } from "./Productes-Styles";

const Productes = () => {
  return (
    <StyledContainer className="my-5">
      {/* Título y Descripción Principal */}
      <Row className="text-center mb-4">
        <Col>
          <h1 style={{ color: "#234564", marginTop: "100px" }}>
            Els nostres Productes
          </h1>
          <p style={{ color: "#555555", fontSize: "18px" }}>
            Descobreix la nostra àmplia gamma de productes d'alta qualitat,
            dissenyats per satisfer totes les teves necessitats.
          </p>
        </Col>
      </Row>

      {/* Carrusel 1 */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center" style={{ color: "#234564" }}>
            Finestres d'alumini i PVC
          </h2>
          <StyledCarousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/ventanas-aluminio/2.jpg"
                alt="Imatge 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/ventanas-aluminio/3.jpg"
                alt="Imatge 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/ventanas-aluminio/4.png"
                alt="Imatge 3"
              />
            </Carousel.Item>

            {/* <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/ventanas-aluminio/6(2).jpg"
                alt="Imatge 4"
              />
            </Carousel.Item> */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/ventanas-aluminio/8.png"
                alt="Imatge 5"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/ventanas-aluminio/9.jpg"
                alt="Imatge 6"
              />
            </Carousel.Item>
            {/* <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/ventanas-aluminio/10(2).jpg"
                alt="Imatge 7"
              />
            </Carousel.Item> */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/ventanas-aluminio/11.jpg"
                alt="Imatge 8"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/ventanas-aluminio/15.png"
                alt="Imatge 9"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/ventanas-aluminio/12.jpg"
                alt="Imatge 10"
              />
            </Carousel.Item>
          </StyledCarousel>
        </Col>
      </Row>

      {/* Carrusel 2 */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center" style={{ color: "#234564" }}>
            Pèrgoles Bioclimàtiques
          </h2>
          <StyledCarousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/pergolas/PERGOLA 1.png"
                alt="Imatge 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/pergolas/PERGOLA 2.jpg"
                alt="Imatge 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/pergolas/PERGOLA 3.jpg"
                alt="Imatge 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/pergolas/PERGOLA 4.png"
                alt="Imatge 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/pergolas/PERGOLA 5.png"
                alt="Imatge 2"
              />
            </Carousel.Item>
          </StyledCarousel>
        </Col>
      </Row>

      {/* Carrusel 3 */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center" style={{ color: "#234564" }}>
            Persianes
          </h2>
          <StyledCarousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/persianas/PERSIANA 1.jpg"
                alt="Imatge 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/persianas/PERSIANA 2.jpg"
                alt="Imatge 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/persianas/PERSIANA 3.jpg"
                alt="Imatge 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/persianas/PERSIANA 4.webp"
                alt="Imatge 2"
              />
            </Carousel.Item>
          </StyledCarousel>
        </Col>
      </Row>

      {/* Carrusel 4 */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center" style={{ color: "#234564" }}>
            Tendall
          </h2>
          <StyledCarousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/toldos/TOLDO 1.jpg"
                alt="Imatge 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/toldos/TOLDO 2.jpg"
                alt="Imatge 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/toldos/TOLDO 3.jpg"
                alt="Imatge 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/toldos/TOLDO 4.jpg"
                alt="Imatge 4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/toldos/TOLDO 5.jpg"
                alt="Imatge 5"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/toldos/TOLDO 6.webp"
                alt="Imatge 6"
              />
            </Carousel.Item>
          </StyledCarousel>
        </Col>
      </Row>

      {/* Carrusel 5 */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center" style={{ color: "#234564" }}>
            Portes Seccionals
          </h2>
          <StyledCarousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/puertas/PUERTA SEC 1.jpg"
                alt="Imatge 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/puertas/PUERTA SEC 2.jpg"
                alt="Imatge 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/puertas/PUESRTA SEC 3.jpg"
                alt="Imatge 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/puertas/PUERTA SEC 4.jpg"
                alt="Imatge 4"
              />
            </Carousel.Item>
          </StyledCarousel>
        </Col>
      </Row>

      {/* Carrusel 6 */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center" style={{ color: "#234564" }}>
            Mosquiteres
          </h2>
          <StyledCarousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imagenes/mosquiteras/MOSQUITERA 1.jpg"
                alt="Imatge 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="imagenes/mosquiteras/MOSQUITERA 2.jpg"
                alt="Imatge 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="imagenes/mosquiteras/MOSQUITERA 3.webp"
                alt="Imatge 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="imagenes/mosquiteras/MOSQUITERA 4.jpg"
                alt="Imatge 2"
              />
            </Carousel.Item>
          </StyledCarousel>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Productes;
