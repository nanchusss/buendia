import React from "react";
import {
  ContainerSection,
  CustomCard,
  Row,
} from "../Subheader/Subheader-Styles.js";
import { useContext } from "react";
import { MyContext } from "../../Context.js";
import { useNavigate, useLocation } from "react-router-dom";

const Subheader = () => {
  const {
    handleShowBlog,
    handleShowForm,
    handleShowInici,
    handleShowProductes,
  } = useContext(MyContext);

  const navigate = useNavigate();
  const location = useLocation(); // Detectar la ruta actual

  return (
    <>
      <ContainerSection as="header">
        <Row>
          <CustomCard
            onClick={() => {
              handleShowInici();
              navigate("/inici");
            }}
          >
            Inici
          </CustomCard>
          <CustomCard
            onClick={() => {
              handleShowBlog();
              navigate("/blog");
            }}
          >
            Blog
          </CustomCard>
          <CustomCard
            onClick={() => {
              handleShowForm();
              navigate("/contacte");
            }}
          >
            Contacte
          </CustomCard>
          <CustomCard
            onClick={() => {
              handleShowProductes();
              navigate("/productes");
            }}
          >
            Productes
          </CustomCard>
        </Row>
      </ContainerSection>
      {/* <div>{renderContent()}</div> Muestra contenido dinámico */}
    </>
  );
};

export default Subheader;
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Subheader = () => {
//   const navigate = useNavigate();

//   return (
//     <nav>
//       <button onClick={() => navigate("/")}>Inici</button>
//       <button onClick={() => navigate("/blog")}>Blog</button>
//       <button onClick={() => navigate("/contacte")}>Contacte</button>
//       <button onClick={() => navigate("/productes")}>Productes</button>
//     </nav>
//   );
// };

// export default Subheader;
