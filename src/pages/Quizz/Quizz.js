import React, { useState } from "react";
import { Card, Button, Form, Modal } from "react-bootstrap";
import emailjs from "emailjs-com";
import {
  QuizWrapper,
  QuizCard,
  Title,
  OptionButton,
  Formy,
} from "..//Quizz/Quizz-styles";

const Quiz = () => {
  const [page, setPage] = useState(1);
  const [paredesCondicion, setParedesCondicion] = useState("");
  const [tipoTrabajo, setTipoTrabajo] = useState("");
  const [techosIncluidos, setTechosIncluidos] = useState("");
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [showModal, setShowModal] = useState(false); // Para controlar el pop-up

  // Manejo de las páginas del Quiz
  const handleOptionSelect = (option) => {
    switch (page) {
      case 1:
        setTipoTrabajo(option);
        setPage(2);
        break;
      case 2:
        setTechosIncluidos(option);
        setPage(3);
        break;
      case 3:
        setParedesCondicion(option);
        setPage(4);
        break;
      case 4:
        setPage(5);
        break;
      default:
        break;
    }
  };

  const handlenumeroTelefonoChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setNumeroTelefono(value); // Solo permite números
    }
  };

  const handlenombreClienteChange = (event) =>
    setNombreCliente(event.target.value);

  // Función para enviar el correo con los datos del Quiz
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      nombreCliente,
      numeroTelefono,
      tipoTrabajo,
      techosIncluidos,
      paredesCondicion,
    };

    emailjs
      .send(
        "service_tvcr0xt", // Tu Service ID
        "template_igfxmo4", // Tu Template ID
        templateParams,
        "4LolALoB0S8PkKs-u" // Tu User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setShowModal(true); // Mostrar el pop-up
        },
        (error) => {
          console.error("FAILED...", error);
          alert(
            "Hubo un error al enviar tu solicitud. Inténtalo de nuevo más tarde."
          );
        }
      );
  };

  const handleGoHome = () => {
    setShowModal(false);
    window.location.href = "/"; // Redirigir al inicio
  };

  return (
    <>
      <QuizWrapper>
        {page === 1 && (
          <QuizCard>
            <Card.Body>
              <Title>¿Com podem ajudar-te?</Title>
              <OptionButton
                variant="primary"
                onClick={() => handleOptionSelect("Compra + Instal.lació")}
              >
                Compra + Instal.lació
              </OptionButton>
              <OptionButton
                variant="primary"
                onClick={() => handleOptionSelect("Instal.lació")}
              >
                Instal.lació
              </OptionButton>
              <OptionButton
                variant="primary"
                onClick={() => handleOptionSelect("Altres productes")}
              >
                Altres productes
              </OptionButton>
            </Card.Body>
          </QuizCard>
        )}
        {page === 2 && (
          <QuizCard>
            <Card.Body>
              <Title>
                Perfecte! Ajuda'ns a assessorar-te millor. Quin es el teu nom?
              </Title>
              <Formy>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Tu nombre aquí"
                    value={nombreCliente}
                    onChange={handlenombreClienteChange}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  style={{
                    display: "block", // Asegura que el botón sea un bloque
                    margin: "0 auto", // Centra horizontalmente el botón
                    marginTop: "30px",
                    padding: "10px 20px", // Opcional: Ajusta el tamaño del botón
                    backgroundColor: "#234564", // Azul petróleo oscuro
                    color: "#ffffff", // Texto blanco
                    borderRadius: "5px", // Bordes redondeados
                  }}
                  onClick={() => handleOptionSelect(nombreCliente)}
                >
                  Següent
                </Button>
              </Formy>
            </Card.Body>
          </QuizCard>
        )}
        {page === 3 && (
          <QuizCard>
            <Card.Body>
              <Title>Perfecte {nombreCliente}! Quin tipus d'obra es?</Title>
              <OptionButton
                variant="primary"
                onClick={() => handleOptionSelect("No, es una obra nova.")}
              >
                Es una obra nova.
              </OptionButton>
              <OptionButton
                variant="primary"
                onClick={() =>
                  handleOptionSelect(
                    "Si, necessito retirar abertures antigues."
                  )
                }
              >
                Es una rehabilitació
              </OptionButton>
            </Card.Body>
          </QuizCard>
        )}
        {page === 4 && (
          <QuizCard>
            <Card.Body>
              <Title>¿T'interessa Alumini o PVC?</Title>
              <OptionButton
                variant="primary"
                onClick={() => handleOptionSelect("Alumini")}
              >
                Alumini
              </OptionButton>
              <OptionButton
                variant="primary"
                onClick={() => handleOptionSelect("PVC")}
              >
                PVC
              </OptionButton>
              <OptionButton
                variant="primary"
                onClick={() => handleOptionSelect("Necessito assessorament")}
              >
                Necessito assessorament
              </OptionButton>
            </Card.Body>
          </QuizCard>
        )}
        {page === 5 && (
          <QuizCard>
            <Card.Body>
              <Title>
                Perfecte {nombreCliente}! Ens deixes un número de telèfon per
                poder contactar-te?
              </Title>
              <Formy onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Ingressa el teu teléfon"
                    value={numeroTelefono}
                    onChange={handlenumeroTelefonoChange}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    display: "block", // Asegura que el botón sea un bloque
                    margin: "0 auto", // Centra horizontalmente el botón
                    marginTop: "30px",
                    padding: "10px 20px", // Opcional: Ajusta el tamaño del botón
                    backgroundColor: "#234564", // Azul petróleo oscuro
                    color: "#ffffff", // Texto blanco
                    borderRadius: "5px", // Bordes redondeados
                  }}
                >
                  Enviar
                </Button>
              </Formy>
            </Card.Body>
          </QuizCard>
        )}

        {/* Pop-Up de Agradecimiento */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>¡Gràcies per la teva resposta!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            La informació ha sigut enviada. Ens posarem en contacte amb tu lo
            més aviat possible.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={handleGoHome}
              style={{
                display: "block", // Asegura que el botón sea un bloque
                margin: "0 auto", // Centra horizontalmente el botón
                padding: "10px 20px", // Opcional: Ajusta el tamaño del botón
                backgroundColor: "#234564", // Azul petróleo oscuro
                color: "#ffffff", // Texto blanco
                borderRadius: "5px", // Bordes redondeados
              }}
            >
              Anar a l'Inici
            </Button>
          </Modal.Footer>
        </Modal>
      </QuizWrapper>
    </>
  );
};

export default Quiz;
