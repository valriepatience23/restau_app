// Events.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const eventsData = [
  {
    id: 1,
    title: 'Anniversaire',
    price: 'À partir de 115 000 FCFA',
    image: 'assets/img/Eanniv.jpg',
    descriptionItalic:
      'Célébrez en grand avec un moment inoubliable, entouré de bonne humeur, de plats festifs et de sourires partagés.',
    features: [
      'Décoration personnalisée et ambiance festive',
      'Menu sur mesure pour tous les âges',
      'Animations et musique pour une fête mémorable'
    ],
    description:
      'Notre équipe transforme votre anniversaire en une véritable célébration gastronomique. Musique, décor personnalisé et menus adaptés vous garantissent une fête sans stress, où chaque bouchée est une bougie allumée.'
  },
  {
    id: 2,
    title: 'Dîner entre amis',
    price: 'À partir de 177 000 FCFA',
    image: 'assets/img/Epot.jpg',
    descriptionItalic:
      'Un soir à rire, à trinquer et à déguster comme si le temps s’arrêtait juste pour vous.',
    features: [
      'Cadre intime et confortable',
      'Plats à partager ou à thème',
      'Service chaleureux et discret'
    ],
    description:
      'Rassemblez vos amis autour d’une table savoureusement dressée. Nos espaces privatifs offrent une ambiance conviviale et chic, parfaite pour des retrouvailles ou des discussions qui s’étirent en plaisir.'
  },
  {
    id: 3,
    title: 'Dîner en famille',
    price: 'À partir de 60 000 FCFA',
    image: 'assets/img/Efam.jpg',
    descriptionItalic:
      'La table où les générations se retrouvent, entre souvenirs partagés et plats du cœur.',
    features: [
      'Menu familial et généreux',
      'Espace enfants disponible',
      'Ambiance douce et conviviale'
    ],
    description:
      'Nous créons une atmosphère chaleureuse où les enfants s’amusent, les grands échangent, et la cuisine réunit tout le monde. Plats familiaux, assises confortables et ambiance douce — une soirée pensée pour les liens précieux qui font la force des familles.'
  }
];


const Events = () => {
  return (
    <section id="events" className="events section" style={{ position: 'relative' }}>
      <img
        className="slider-bg"
        src="assets/img/events-bg.jpg"
        alt="Fond des événements"
        data-aos="fade-in"
        style={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      />

      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={1000}
          autoplay={{ delay: 8000 }}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          data-aos="fade-up"
          data-aos-delay="100"
          className="init-swiper"
        >
          {eventsData.map((event) => (
            <SwiperSlide key={event.id} style={{ width: '100%', maxWidth: '900px' }}>
              <div className="row gy-4 event-item">
                <div className="col-lg-6">
                  <img
                    src={event.image}
                    className="img-fluid"
                    alt={event.title}
                    style={{ borderRadius: '8px' }}
                  />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>{event.title}</h3>
                  <div className="price">
                    <p>
                      <span>{event.price}</span>
                    </p>
                  </div>
                  <p className="fst-italic">{event.descriptionItalic}</p>
                  <ul>
                    {event.features.map((feature, index) => (
                      <li key={index}>
                        <i className="bi bi-check2-circle"></i> <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p>{event.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Events;
