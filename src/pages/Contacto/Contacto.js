import { useState } from "react";
import emailjs from "emailjs-com";
import {
  StyledFormContainer,
  StyledFormControl,
  StyledFormTitle,
  StyledFormButton,
} from "./Contacto-styles";
import { Form } from "react-bootstrap";

const ContactForm = () => {
  const [nombreCliente, setNombreCliente] = useState("");
  const [correoCliente, setCorreoCliente] = useState("");
  const [telefonoCliente, setTelefonoCliente] = useState("");
  const [mensajeCliente, setMensajeCliente] = useState("");

  const handleNombre = (e) => setNombreCliente(e.target.value);
  const handleCorreo = (e) => setCorreoCliente(e.target.value);
  const handleTelefono = (e) => setTelefonoCliente(e.target.value);
  const handleMensaje = (e) => setMensajeCliente(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: nombreCliente,
      from_email: correoCliente,
      phone: telefonoCliente,
      message: mensajeCliente, // Cambiado para que coincida con la plantilla
      to_name: "Finestracat", // Nombre del destinatario
    };

    emailjs
      .send(
        "service_tvcr0xt", // Tu Service ID
        "template_toouger", // Tu Template ID
        templateParams,
        "4LolALoB0S8PkKs-u" // Tu Public Key/User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Mensaje enviado correctamente.");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Error al enviar el mensaje. Inténtalo más tarde.");
        }
      );

    // Limpia los campos del formulario
    setNombreCliente("");
    setCorreoCliente("");
    setTelefonoCliente("");
    setMensajeCliente("");
  };

  return (
    <StyledFormContainer>
      <StyledFormTitle>Contacta amb nosaltres</StyledFormTitle>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nom</Form.Label>
          <StyledFormControl
            type="text"
            placeholder="Introduce tu nombre"
            value={nombreCliente}
            onChange={handleNombre}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correu electrònic</Form.Label>
          <StyledFormControl
            type="email"
            placeholder="Introduce tu correo electrónico"
            value={correoCliente}
            onChange={handleCorreo}
          />
          {!correoCliente && (
            <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
              El camp no pot estar buit.
            </p>
          )}
          {correoCliente &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoCliente) && (
              <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                Introdueix un correu electrònic vàlid.
              </p>
            )}
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Label>Telèfon</Form.Label>
          <StyledFormControl
            type="text"
            placeholder="Introdueix el teu teléfon"
            value={telefonoCliente}
            onChange={(e) => {
              const regex = /^[0-9]*$/; // Expresión regular para solo números
              if (regex.test(e.target.value)) {
                handleTelefono(e); // Si es un número válido, actualiza el estado
              }
            }}
          />
          {!telefonoCliente && (
            <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
              El camp no pot estar buit.
            </p>
          )}
          {telefonoCliente && !/^[0-9]+$/.test(telefonoCliente) && (
            <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
              Només pots introduir números.
            </p>
          )}
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Missatge</Form.Label>
          <StyledFormControl
            style={{ width: "100%", borderRadius: "5px" }}
            as="textarea"
            rows={3}
            placeholder="Escriu el teu missatge..."
            value={mensajeCliente}
            onChange={handleMensaje}
          />
          {!mensajeCliente && (
            <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
              El missatge no pot estar buit
            </p>
          )}
        </Form.Group>

        <StyledFormButton
          variant="primary"
          type="submit"
          style={{
            backgroundColor: "#2b4765", // Azul petróleo oscuro
            color: "white", // Color del texto
            fontSize: "18px", // Tamaño del texto
            padding: "10px 15px", // Espaciado interno
            border: "none", // Sin bordes
            borderRadius: "5px",
            display: "block",
            margin: "20px auto", // Bordes redondeados
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Sombra ligera
            cursor: "pointer", // Indicador de que es clickeable
            width: "70%", // Ancho completo
            textAlign: "center", // Alineación del texto
          }}
        >
          Enviar
        </StyledFormButton>
      </Form>
    </StyledFormContainer>
  );
};

export default ContactForm;
