import React from 'react';
import Header from '../../components/Header';

function About() {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>WHY US</h2>
        <p className="text-white">To Know About Us</p>
      </div>  

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6 order-1 order-lg-2">
            <img
              src="/assets/img/about.jpg"
              className="img-fluid about-img"
              alt="About us"
            />
          </div>
          <div className="col-lg-6 order-2 order-lg-1 content">
            <h3>More than a restaurant… a Cameroonian experience</h3>
            <p className="fst-italic text">
              At <strong>RestoSwift</strong>, every dish tells a story, every flavor awakens a memory, and every shared smile is a journey to the heart of our culture.
            </p>
            <ul>
              <li>
                <i className="bi bi-check2-all"></i>
                <span>
                  Traditional recipes reimagined with passion, from grilled dishes to rich sauces.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-all"></i>
                <span>
                  Fresh, locally sourced ingredients carefully selected from Cameroonian producers.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-all"></i>
                <span>
                  A warm atmosphere blending modernity with authentic African charm.
                </span>
              </li>
            </ul>
            <p className="text">
              Whether you're a fan of ndolé, grilled fish, bean fritters, or simply curious to explore the rich culinary heritage of Cameroon, <strong>you are home here</strong>. Enjoy your meal — or as we say back home, <em>man no run!</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
