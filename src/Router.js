import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog/Blog";
import ContactForm from "./pages/Contacto/Contacto";
import Productes from "./components/Productes/productes";
import Quiz from "./pages/Quizz/Quizz";

const Router = () => {
  const [currentPage, setCurrentPage] = useState("home");

  // Funciones para cambiar el estado de la página actual
  const showHome = () => setCurrentPage("home");
  const showBlog = () => setCurrentPage("blog");
  const showContact = () => setCurrentPage("contact");
  const showProducts = () => setCurrentPage("products");
  const showQuiz = () => setCurrentPage("quiz");

  return (
    <>
      <Header
        showHome={showHome}
        showBlog={showBlog}
        showContact={showContact}
        showProducts={showProducts}
        handleShowQuizz={showQuiz}
      />
      <main>
        {currentPage === "home" && <Home />}
        {currentPage === "blog" && <Blog />}
        {currentPage === "contact" && <ContactForm />}
        {currentPage === "products" && <Productes />}
        {currentPage === "quiz" && <Quiz />}
      </main>
      <Footer />
    </>
  );
};

export default Router;
