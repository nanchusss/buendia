import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog/Blog";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InspirationPage from "./pages/Inspiration/Inspiration";
import Login from "./pages/Login/Login";
import Quiz from "./pages/Quizz/Quizz";
import ContactForm from "./pages/Contacto/Contacto";
import ProtectedRoute from "./components/Protected-routes";
import { useContext } from "react";
import { MyContext } from "../src/Context";
import Productes from "./components/Productes/productes";

const Router = () => {
  const {
    state,
    handleState,
    handleShowBlog,
    handleSetAlreadyLogged,
    handleShowForm,
    login,
    showForm,
    alreadyLogged,
    handleLogin,
    showBlog,
    showQuizz,
    handleShowQuizz,
    setAlreadyLogged,
  } = useContext(MyContext);

  return (
    <>
      <Header handleLogin={handleLogin} handleShowQuizz={handleShowQuizz} />
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleShowQuizz={handleShowQuizz}
                state={state}
                handleState={handleState}
                handleShowBlog={handleShowBlog}
                showBlog={showBlog}
                handleSetAlreadyLogged={handleSetAlreadyLogged}
                handleShowForm={handleShowForm}
              />
            }
          />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contacte" element={<ContactForm />} />
          <Route path="/Quizz" element={<Quiz />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Productes" element={<Productes />} />
          <Route
            path="/Inspiration"
            element={
              <ProtectedRoute alreadyLogged={alreadyLogged}>
                <InspirationPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<div>404 - Página no encontrada</div>} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
};

export default Router;
