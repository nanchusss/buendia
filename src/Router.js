import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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

// Determina el tipo de Router según el entorno
const RouterWrapper = ({ children }) => {
  const isProduction = process.env.NODE_ENV === "production";
  return isProduction ? (
    <HashRouter>{children}</HashRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );
};

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

  if (login === true) {
    return (
      <>
        <Login />
        <Footer />
      </>
    );
  }

  if (showForm === true) {
    return (
      <>
        <Header />
        <ContactForm />
      </>
    );
  }

  if (state === true && alreadyLogged === false) {
    return (
      <>
        <Login
          login={login}
          handleLogin={handleLogin}
          handleSetAlreadyLogged={handleSetAlreadyLogged}
        />
        <Footer />
      </>
    );
  }

  if (alreadyLogged === true || state === true) {
    return (
      <>
        <Header />
        <InspirationPage />
        <Footer />
      </>
    );
  }

  if (showBlog === true) {
    return (
      <>
        <Header />
        <Blog />
        <Footer />
      </>
    );
  }

  if (showQuizz === true) {
    return (
      <>
        <div style={{ position: "fixed", top: 0 }}>
          <Header />
        </div>
        <Quiz />
      </>
    );
  }

  return (
    <>
      <Header handleLogin={handleLogin} handleShowQuizz={handleShowQuizz} />

      <RouterWrapper>
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                alreadyLogged={alreadyLogged}
                login={login}
                handleLogin={handleLogin}
                handleSetAlreadyLogged={handleSetAlreadyLogged}
                setAlreadyLogged={setAlreadyLogged}
              />
            }
          />
          <Route
            index
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
          <Route path="/Blog/" element={<Blog />} />
          <Route path="/Contacte/" element={<ContactForm />} />
          <Route path="/Quizz/" element={<Quiz />} />
          <Route path="/productes" element={<Productes />} />
          <Route path="*" element={<div>404 - Página no encontrada</div>} />
        </Routes>
      </RouterWrapper>
      <Footer />
    </>
  );
};

export default Router;
