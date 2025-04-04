// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import Blog from "./pages/Blog/Blog";
// import Header from "./components/Header/Header";
// import Subheader from "./components/Subheader/Subheader";
// import Footer from "./components/Footer/Footer";
// import InspirationPage from "./pages/Inspiration/Inspiration";
// import Login from "./pages/Login/Login";
// import Quiz from "./pages/Quizz/Quizz";
// import ContactForm from "./pages/Contacto/Contacto";
// import ProtectedRoute from "./components/Protected-routes";
// import { useContext } from "react";
// import { MyContext } from "../src/Context";
// import Productes from "./components/Productes/Productes";

// const Router = () => {
//   const {
//     state,
//     handleState,
//     handleShowBlog,
//     handleSetAlreadyLogged,
//     handleShowForm,
//     handleInici,
//     handleProductes,
//     login,
//     showForm,
//     alreadyLogged,
//     handleLogin,
//     showBlog,
//     showProductes,
//     showInici,
//     showQuizz,
//     handleShowQuizz,
//     setAlreadyLogged,
//   } = useContext(MyContext);

//   //login para entrar en la página loggeado, pero en realidad lo tomo para llamar a login nada más, el que va a desarrollar el loggeado va a ser setAlreadyLogged

//   //Mostrar Quizz

//   if (login === true) {
//     console.log("login ahora es true");
//     return (
//       <>
//         <Login />
//         <Subheader />
//         <Footer />
//       </>
//     );
//   }
//   if (showForm === true) {
//     console.log("muestra el formulario de contacto");
//     return (
//       <>
//         <Header />
//         <Subheader />
//         <ContactForm />
//       </>
//     );
//   }

//   if (state === true && alreadyLogged === false) {
//     console.log("state es true y alreadylogged es false");
//     return (
//       <>
//         <Login
//           login={login}
//           handleLogin={handleLogin}
//           handleSetAlreadyLogged={handleSetAlreadyLogged}
//         />
//         <Footer />
//       </>
//     );
//   }

//   if (alreadyLogged === true || state === true) {
//     console.log("ya está loggeado", alreadyLogged, "y el estado es", state);
//     console.log("holis, el areadylogged es true y le dieron click a la card");
//     return (
//       <>
//         <Header></Header>
//         <Subheader></Subheader>
//         <InspirationPage />
//         <Footer></Footer>
//       </>
//     );
//   }
//   if (showBlog === true) {
//     return (
//       <>
//         <Header></Header>
//         <Subheader></Subheader>
//         <Blog />
//         <Footer></Footer>
//       </>
//     );
//   }
//   if (showQuizz === true) {
//     console.log("mostrar Quizz");
//     return (
//       <>
//         <div style={{ position: "fixed", top: 0 }}>
//           <Header></Header>
//         </div>

//         <Quiz></Quiz>
//         {/* <Footer /> */}
//       </>
//     );
//   }
//   if (showProductes === true) {
//     console.log("mostrar Productos");
//     return (
//       <>
//         <div style={{ position: "fixed" }}>
//           <Header></Header>
//           <Subheader></Subheader>
//         </div>

//         <Productes></Productes>
//         {/* <Footer /> */}
//       </>
//     );
//   }
//   if (showInici === true) {
//     console.log("mostrar Productos");
//     return (
//       <>
//         <div style={{ position: "fixed" }}>
//           <Header
//             handleInici={handleInici}
//             handleProductes={handleProductes}
//           ></Header>
//           <Subheader></Subheader>
//         </div>
//         <Home></Home>

//         {/* <Footer /> */}
//       </>
//     );
//   }

//   return (
//     <>
//       <Header handleLogin={handleLogin} handleShowQuizz={handleShowQuizz} />
//       <Subheader
//         handleInici={handleInici}
//         handleProductes={handleProductes}
//       ></Subheader>
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/login"
//             element={
//               <Login
//                 alreadyLogged={alreadyLogged}
//                 login={login}
//                 handleLogin={handleLogin}
//                 handleSetAlreadyLogged={handleSetAlreadyLogged}
//                 setAlreadyLogged={setAlreadyLogged}
//               />
//             }
//           />

//           <Route
//             index
//             element={
//               <Home
//                 handleShowQuizz={handleShowQuizz}
//                 state={state}
//                 handleState={handleState}
//                 handleShowBlog={handleShowBlog}
//                 showBlog={showBlog}
//                 handleSetAlreadyLogged={handleSetAlreadyLogged}
//                 handleShowForm={handleShowForm}
//               />
//             }
//           />
//           <Route path="/Blog/" element={<Blog />} />
//           <Route path="/Inici/" element={<Home />} />
//           <Route path="/Productes/" element={<Productes />} />
//           <Route path="/Contacte/" element={<ContactForm />} />
//           <Route path="/Quizz/" element={<Quiz />} />
//           <Route
//             path="/Login/"
//             element={
//               <Login
//                 login={login}
//                 handleLogin={handleLogin}
//                 alreadyLogged={alreadyLogged} //
//                 handleSetAlreadyLogged={handleSetAlreadyLogged}
//               />
//             }
//           />
//           <Route
//             path="/inspiration"
//             element={
//               <ProtectedRoute alreadyLogged={alreadyLogged}>
//                 <Route
//                   path="/inspiration"
//                   element={
//                     alreadyLogged ? (
//                       <InspirationPage />
//                     ) : (
//                       <Navigate to="/Login/" />
//                     )
//                   }
//                 />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/productes" element={<Productes />} />
//           {/* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
//           <Route path="*" element={<div>404</div>} />
//         </Routes>
//       </BrowserRouter>
//       <Footer />
//     </>
//   );
// };

// export default Router;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog/Blog";
import Header from "./components/Header/Header";
//import Subheader from "./components/Subheader/Subheader";
import Footer from "./components/Footer/Footer";
import InspirationPage from "./pages/Inspiration/Inspiration";
import Login from "./pages/Login/Login";
import Quiz from "./pages/Quizz/Quizz";
import ContactForm from "./pages/Contacto/Contacto";
import ProtectedRoute from "./components/Protected-routes";
import Productes from "./components/Productes/ProductesTemporal";
import { useContext, useEffect } from "react";
import { MyContext } from "../src/Context";

const Router = () => {
  const {
    showForm,

    showBlog,

    showQuizz,
  } = useContext(MyContext);

  useEffect(() => {
    if (showQuizz) {
      window.location.href = "/quizz";
    }
  }, [showQuizz]);

  useEffect(() => {
    if (showBlog) {
      window.location.href = "/blog";
    }
  }, [showBlog]);
  useEffect(() => {
    if (showForm) {
      window.location.href = "/contacte";
    }
  }, [showForm]);

  return (
    <BrowserRouter>
      {/* Componentes globales */}
      <Header />
      {/* <Subheader /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/inici" element={<Home />} />
        <Route path="/productes" element={<Productes />} />
        <Route path="/contacte" element={<ContactForm />} />
        <Route path="/quizz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/inspiration"
          element={
            <ProtectedRoute>
              <InspirationPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
