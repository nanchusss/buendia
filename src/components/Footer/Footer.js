import {
  FooterCard,
  FooterTitle,
  FooterTitle2,
} from "..//Footer/Footer-styles";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <FooterCard>
      <FooterTitle2 style={{ marginTop: "40px" }}>FINESTRACAT</FooterTitle2>{" "}
      <Card.Body className="text-center">
        <FooterTitle>Barcelona, Girona i Tarragona</FooterTitle>
        <Card.Text>
          <FooterTitle>
            info@finestracat.com / Tel. 691292245 / Tel. 621187067
          </FooterTitle>
        </Card.Text>
        <a
          href="http://www.instagram.com/finestracat.cat"
          className="d-inline-block rounded-circle"
          style={{
            backgroundColor: "#E1306C",
            width: "50px",
            height: "50px",
            textAlign: "center",
            verticalAlign: "middle",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            color="#fff"
            className="mi-clase"
            style={{
              margin: "auto",
              paddingTop: "10px",
            }}
          />
        </a>
      </Card.Body>
    </FooterCard>
  );
}

export default Footer;
