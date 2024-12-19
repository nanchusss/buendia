import Router from "./Router";

const App = () => {
  return <Router />;
};

export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Blog from "./pages/Blog/Blog";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import InspirationPage from "./pages/Inspiration/Inspiration";
// import Login from "./pages/Login/Login";
// import Quiz from "./pages/Quizz/Quizz";
// import ContactForm from "./pages/Contacto/Contacto";
// import ProtectedRoute from "./components/Protected-routes";
// import { useContext } from "react";
// import { MyContext } from "./Context";
// import Productes from "./components/Productes/Productes";

// const App = () => {
//   const {
//     state,
//     handleState,
//     handleShowBlog,
//     handleSetAlreadyLogged,
//     handleShowForm,
//     login,
//     showForm,
//     alreadyLogged,
//     handleLogin,
//     showBlog,
//     showQuizz,
//     handleShowQuizz,
//     setAlreadyLogged,
//   } = useContext(MyContext);

//   return (
//     <>
//       <Header handleLogin={handleLogin} handleShowQuizz={handleShowQuizz} />
//       <Routes>
//         <Route
//           path="/login"
//           element={
//             <Login
//               alreadyLogged={alreadyLogged}
//               login={login}
//               handleLogin={handleLogin}
//               handleSetAlreadyLogged={handleSetAlreadyLogged}
//               setAlreadyLogged={setAlreadyLogged}
//             />
//           }
//         />
//         <Route
//           index
//           element={
//             <Home
//               handleShowQuizz={handleShowQuizz}
//               state={state}
//               handleState={handleState}
//               handleShowBlog={handleShowBlog}
//               showBlog={showBlog}
//               handleSetAlreadyLogged={handleSetAlreadyLogged}
//               handleShowForm={handleShowForm}
//             />
//           }
//         />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/contacte" element={<ContactForm />} />
//         <Route path="/quizz" element={<Quiz />} />
//         <Route
//           path="/login"
//           element={
//             <Login
//               login={login}
//               handleLogin={handleLogin}
//               alreadyLogged={alreadyLogged}
//               handleSetAlreadyLogged={handleSetAlreadyLogged}
//             />
//           }
//         />
//         <Route
//           path="/inspiration"
//           element={
//             <ProtectedRoute alreadyLogged={alreadyLogged}>
//               <Route
//                 path="/inspiration"
//                 element={
//                   alreadyLogged ? (
//                     <InspirationPage />
//                   ) : (
//                     <Navigate to="/login" />
//                   )
//                 }
//               />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/productes" element={<Productes />} />
//         <Route path="*" element={<div>404</div>} />
//       </Routes>
//       <Footer />
//     </>
//   );
// };

// export default App;
