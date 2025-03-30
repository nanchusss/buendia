import React from "react";
import { FloatingButton } from "./BotonStyles";
import { FaWhatsapp } from "react-icons/fa"; // Asegurate de tener instalado react-icons

const WhatsAppButton = () => {
  const phoneNumber = "34691292245"; // Sin espacios, con código de país
  const message = "Hola! Vull més informació sobre FINESTRACAT :)";

  return (
    <FloatingButton
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </FloatingButton>
  );
};

export default WhatsAppButton;
