import React from "react";

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us section">
      <div className="container section-title" data-aos="fade-up">
        <h2>WHY US</h2>
        <p>Why Choose Our Restaurant</p>
      </div>

      <div className="container">
  <div className="row gy-4">
    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
      <div className="card-item">
        <span>01</span>
        <h4><a href="#" className="stretched-link">Fraîcheur des côtes</a></h4>
        <p>
          Des poissons fraîchement pêchés dans les eaux de l’Atlantique, grillés au feu de bois et relevés avec nos épices maison… le goût authentique de Limbé dans chaque bouchée.
        </p>
      </div>
    </div>

    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
      <div className="card-item">
        <span>02</span>
        <h4><a href="#" className="stretched-link">Saveurs des Hauts-Plateaux</a></h4>
        <p>
          Du taro au ndjapché en passant par le koki, chaque assiette est une ode à la terre fertile de l’Ouest et au savoir-faire ancestral des peuples bamileké.
        </p>
      </div>
    </div>

    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
      <div className="card-item">
        <span>03</span>
        <h4><a href="#" className="stretched-link">Trésors de la forêt</a></h4>
        <p>
          Gnetum, champignons noirs, épices rares… notre cuisine s’inspire de la richesse naturelle des grandes forêts du Cameroun profond.
        </p>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default WhyUs;