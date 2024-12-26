import React, { useState, useEffect } from "react";
import {
  BlogContainer,
  BlogCard,
  BlogTitle,
  BlogRow,
  BlogColumn,
  Title,
  CenteredModal,
} from "./Blog-styles";
import axios from "axios";
import { Modal } from "react-bootstrap";

const API_KEY = "AIzaSyBBjNg6AWvF40NLWecoV5JvZGh5lyp1mhI";

const Blog = () => {
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${encodeURIComponent(
            "Arquitectura moderna OR diseño interiores moderno"
          )}&key=${API_KEY}`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideos();
  }, []);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Title
        style={{ color: "#234564", marginTop: "150px", textAlign: "center" }}
      >
        Blog
      </Title>

      <p
        style={{
          color: "#555555",
          fontSize: "20px", // Tamaño de fuente aumentado para mejor legibilidad
          lineHeight: "1.8", // Espaciado entre líneas
          textAlign: "center", // Centrar el texto
          marginTop: "20px", // Espaciado entre el título y el párrafo
          marginBottom: "40px", // Espaciado inferior para separación visual
          maxWidth: "800px", // Limitar el ancho para mejor lectura
          marginLeft: "auto", // Centrar horizontalmente
          marginRight: "auto",
        }}
      >
        Descobreix les últimes tendències, novetats i idees per inspirar-te en
        els teus projectes. Sigues creatiu i transforma els teus espais amb
        estil i funcionalitat!
      </p>

      <BlogContainer>
        <BlogRow>
          {videos.map((video, index) => (
            <BlogColumn key={index}>
              <BlogCard
                style={{
                  backgroundImage: `url(${video?.snippet?.thumbnails?.high?.url})`,
                  backgroundSize: "100%",
                }}
                onClick={() => handleVideoClick(video)}
              ></BlogCard>
              <BlogTitle style={{ color: "#373737" }}>
                {video?.snippet?.title}
              </BlogTitle>
            </BlogColumn>
          ))}
        </BlogRow>
      </BlogContainer>
      {currentVideo && (
        <CenteredModal show={showModal} onHide={closeModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{currentVideo.snippet.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title={currentVideo.snippet.title}
                className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
              ></iframe>
            </div>
          </Modal.Body>
        </CenteredModal>
      )}
    </>
  );
};

export default Blog;
