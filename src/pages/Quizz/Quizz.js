import React, { useState } from "react";
import { Card, Form, Modal } from "react-bootstrap";
import emailjs from "emailjs-com";
import {
  QuizWrapper,
  QuizCard,
  Title,
  OptionButton,
  Formy,
} from "../Quizz/Quizz-styles";

const Quiz = () => {
  const [page, setPage] = useState(1);
  const [paredesCondicion, setParedesCondicion] = useState("");
  const [tipoTrabajo, setTipoTrabajo] = useState("");
  const [techosIncluidos, setTechosIncluidos] = useState("");
  const [numeroTelefono, setNumeroTelefono] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [showModal, setShowModal] = useState(false);

  const avanzar = () => setPage((prev) => prev + 1);

  const handleOptionSelect = (option) => {
    if (page === 1) setTipoTrabajo(option);
    if (page === 2) setNombreCliente(option);
    if (page === 3) setTechosIncluidos(option);
    if (page === 4) setParedesCondicion(option);
    avanzar();
  };

  const handlenumeroTelefonoChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setNumeroTelefono(value);
    }
  };

  const handleNombreKeyPress = (e) => {
    if (e.key === "Enter" && nombreCliente.trim() !== "") {
      e.preventDefault();
      avanzar();
    }
  };

  const handleTelefonoKeyPress = (e) => {
    if (e.key === "Enter" && numeroTelefono.trim() !== "") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!numeroTelefono.trim()) {
      alert("Per favor, escriu el teu número de telèfon.");
      return;
    }

    const templateParams = {
      nombreCliente,
      numeroTelefono,
      tipoTrabajo,
      techosIncluidos,
      paredesCondicion,
    };

    emailjs
      .send(
        "service_tvcr0xt",
        "template_igfxmo4",
        templateParams,
        "4LolALoB0S8PkKs-u"
      )
      .then(() => {
        setShowModal(true);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Error en l'enviament. Intenta-ho més tard.");
      });
  };

  const handleGoHome = () => {
    setShowModal(false);
    window.location.href = "/";
  };

  return (
    <>
      <QuizWrapper>
        {page === 1 && (
          <QuizCard>
            <Card.Body>
              <Title>¿Com podem ajudar-te?</Title>
              <OptionButton
                onClick={() => handleOptionSelect("Compra + Instal.lació")}
              >
                Compra + Instal.lació
              </OptionButton>
              <OptionButton onClick={() => handleOptionSelect("Instal.lació")}>
                Instal.lació
              </OptionButton>
              <OptionButton
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
              <Title>Perfecte! Quin es el teu nom?</Title>
              <Formy>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Tu nom"
                    value={nombreCliente}
                    onChange={(e) => setNombreCliente(e.target.value)}
                    onKeyPress={handleNombreKeyPress}
                    required
                  />
                </Form.Group>
                <OptionButton
                  type="button"
                  disabled={nombreCliente.trim() === ""}
                  onClick={() => avanzar()}
                >
                  Següent
                </OptionButton>
              </Formy>
            </Card.Body>
          </QuizCard>
        )}
        {page === 3 && (
          <QuizCard>
            <Card.Body>
              <Title>Perfecte {nombreCliente}! Quin tipus d'obra es?</Title>
              <OptionButton onClick={() => handleOptionSelect("Obra nova")}>
                Obra nova
              </OptionButton>
              <OptionButton onClick={() => handleOptionSelect("Rehabilitació")}>
                Rehabilitació
              </OptionButton>
            </Card.Body>
          </QuizCard>
        )}
        {page === 4 && (
          <QuizCard>
            <Card.Body>
              <Title>¿T'interessa Alumini o PVC?</Title>
              <OptionButton onClick={() => handleOptionSelect("Alumini")}>
                Alumini
              </OptionButton>
              <OptionButton onClick={() => handleOptionSelect("PVC")}>
                PVC
              </OptionButton>
              <OptionButton
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
                Perfecte {nombreCliente}! Ens deixes un número de telèfon?
              </Title>
              <Formy onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    type="tel"
                    placeholder="Telèfon"
                    value={numeroTelefono}
                    onChange={handlenumeroTelefonoChange}
                    onKeyPress={handleTelefonoKeyPress}
                    required
                  />
                </Form.Group>
                <OptionButton
                  type="submit"
                  disabled={numeroTelefono.trim() === ""}
                >
                  Enviar
                </OptionButton>
              </Formy>
            </Card.Body>
          </QuizCard>
        )}

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>¡Gràcies per la teva resposta!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Ens posarem en contacte amb tu el més aviat possible.
          </Modal.Body>
          <Modal.Footer>
            <OptionButton onClick={handleGoHome}>Anar a l'Inici</OptionButton>
          </Modal.Footer>
        </Modal>
      </QuizWrapper>
    </>
  );
};

export default Quiz;
