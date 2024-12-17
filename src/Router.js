import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog/Blog";
import ContactForm from "./pages/Contacto/Contacto";
import Productes from "./components/Productes/productes";
import Quiz from "./pages/Quizz/Quizz";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacte" element={<ContactForm />} />
        <Route path="/productes" element={<Productes />} />
        <Route path="/quizz" element={<Quiz />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
