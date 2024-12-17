import React, { useContext } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
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
import Productes from "./components/Productes/productes";
import { MyContext } from "./Context";

const AppRouter = () => {
  const { alreadyLogged } = useContext(MyContext);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacte" element={<ContactForm />} />
        <Route path="/productes" element={<Productes />} />
        <Route path="/quizz" element={<Quiz />} />
        <Route
          path="/inspiration"
          element={
            alreadyLogged ? (
              <InspirationPage />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
