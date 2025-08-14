import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      {/* 💄 CSS intégré pour le fond statique */}
      <style>{`
        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>

      <section className="hero" id="hero">
        {/* 🖼️ Image statique en fond */}
        <div className="hero-background">
          <img src="/assets/img/local/Saucej.jpg" alt="Plat camerounais" />
        </div>

        {/* 📝 Contenu texte au-dessus */}
        <div className="container text-center">
          <h2>Welcome to <span>RestoSwift</span></h2>
          <p>Delivering great food for more than 10 years!</p>
          <div className="d-flex justify-content-center mt-4" data-aos="fade-up" data-aos-delay="300">
            <Link to="/menu" className="cta-btn mx-4 text-white fw-bold text-decoration-none">
              Menu
            </Link>
            <Link to="/book-a-table" className="cta-btn mx-4 text-white fw-bold text-decoration-none">
              Book a Table
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
