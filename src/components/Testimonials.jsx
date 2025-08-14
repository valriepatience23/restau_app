import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

//import "./Testimonials.css";

// Composant étoile personnalisé (remplie ou vide)
const Star = ({ filled }) => (
  <svg
    className={`star-icon ${filled ? "filled" : "empty"}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    width="20"
    height="20"
    fill={filled ? "#ffc107" : "#e4e5e9"}
    role="img"
    aria-hidden="true"
  >
    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36-17.7 54.6l105.7 
      103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.6 
      68.7c23.2 12.2 50.9-7.4 
      46.4-33.7l-25-145.5 105.7-103c19-18.6 8.5-50.8-17.7-54.6L382 
      150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
  </svg>
);

// Tableau exportable si nécessaire
const testimonialsData = [
  {
    text: "Le service est exceptionnel, je reviendrai sans hésiter !",
    img: "assets/img/testimonials/testimonials-1.jpg",
    name: "Saul Goodman",
    title: "CEO & Founder",
    rating: 5,
  },
  {
    text: "Un endroit charmant avec une cuisine délicieuse. Merci !",
    img: "assets/img/testimonials/testimonials-2.jpg",
    name: "Sara Wilsson",
    title: "Designer",
    rating: 4,
  },
  {
    text: "Très bon rapport qualité-prix, je recommande fortement.",
    img: "assets/img/testimonials/testimonials-3.jpg",
    name: "Jena Karlis",
    title: "Store Owner",
    rating: 5,
  },
  {
    text: "Ambiance chaleureuse et personnel accueillant. Un plaisir !",
    img: "assets/img/testimonials/testimonials-4.jpg",
    name: "Matt Brandon",
    title: "Freelancer",
    rating: 4,
  },
  {
    text: "Le meilleur restaurant de la ville sans aucun doute.",
    img: "assets/img/testimonials/testimonials-5.jpg",
    name: "John Larson",
    title: "Entrepreneur",
    rating: 5,
  },
  {
    text: "Des saveurs authentiques et un service impeccable.",
    img: "assets/img/testimonials/testimonials-6.jpg",
    name: "Isabelle Moreau",
    title: "Consultante",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What they're saying about us</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={false}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
            }}

          className="init-swiper"
        >
          {(testimonialsData ?? []).map(({ text, img, name, title, rating }, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{text}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img src={img} className="testimonial-img" alt={name} />
                <h3>{name}</h3>
                <h4>{title}</h4>
                <div className="star-rating" aria-label={`Rating: ${rating} out of 5`}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={`${name}-star-${i}`} filled={i <= rating} />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
