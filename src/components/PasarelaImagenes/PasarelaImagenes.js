import Carousel from "react-bootstrap/Carousel";
import CarouselItem1 from "../PasarelaImagenes/Images/interior1.png";
import CarouselItem2 from "../PasarelaImagenes/Images/interior3.png";
import CarouselItem3 from "../PasarelaImagenes/Images/PAREJA.png";
import { Imagen, Pasarela, Subtitulo, Titulo } from "./PasarelaImagenes-styles";

function PasarelaImagenes() {
  return (
    <Pasarela fade>
      <Carousel.Item>
        <Imagen
          className="d-block w-100"
          src={CarouselItem1}
          alt="First slide"
        />
        <Carousel.Caption>
          <Titulo>Vols renovar la teva llar </Titulo>
          <Subtitulo> A FINESTRACAT som al teu servei</Subtitulo>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Imagen
          className="d-block w-100"
          src={CarouselItem3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <Titulo>FINESTRACAT</Titulo>
          <Subtitulo>La teva finestra!</Subtitulo>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Imagen
          className="d-block w-100"
          src={CarouselItem2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <Titulo>A tota Catalunya</Titulo>
          <Subtitulo>
            Treballem a tota Catalunya per apropar-te solucions de confiança i
            qualitat.
          </Subtitulo>
        </Carousel.Caption>
      </Carousel.Item>
    </Pasarela>
  );
}

export default PasarelaImagenes;
