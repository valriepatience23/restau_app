import React from "react";

const chefsData = [
  {
    id: 1,
    name: "Waren Musango",
    role: "Master Chef",
    speciality: "Grill",
    description: "Expert in fusion cuisine and flame-grilled specialties.",
    imgSrc: "assets/img/chefs/au.jpg",
    aosDelay: "100",
  },

  {
    id: 3,
    name: "Adoph Koum ",
    role: "Cook",
    speciality: "Végétarien",
    description: "Loves bold flavors and plant-based creativity.",
    imgSrc: "assets/img/chefs/chefs.jpg",
    aosDelay: "300",
  },

  {
    id: 2,
    name: "Sarah Biwole",
    role: "Patissiere",
    speciality: "Dessert",
    description: "Creates refined pastries and seasonal sweets.",
    imgSrc: "assets/img/chefs/chefsF (1).jpg",
    aosDelay: "200",
  },
  


];

const Chefs = () => {
  return (
    <>
      {/* 💄 Style intégré */}
      <style>{`
        .chefs {
          position: relative;
          padding: 80px 0;
          background: url('/assets/img/chefs/chefs2.jpg') center/cover no-repeat;
          opaciy: 0.5;
          color: #fff;
        }

        .chefs .section-title h2,
        .chefs .section-title p {
          color: #fff;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.6);
        }

        .chefs .section-title p {
          font-size: 29px;
          margin-top: 14px;
        }

        .chefs .section-title h2 {
            font-size: 21px;
        }

        .member {
          position: relative;
          overflow: hidden;
        }

        .member-info-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 10px; /* 👇 Positionné en bas */
          padding: 10px 15px;
          
          background: rgba(255, 255, 255, 0.9);
          transition: bottom 0.4s ease;
          text-align: center;
        }

        .member:hover {
          transform: translateY(-5px);
        }

        .member img {
          width: 100%;
          object-fit: cover;
        }

        .badge-speciality {
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--accent-color, #e5345b);
          color: #fff;
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 20px;
          font-weight: bold;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        }

        .member-info {
          background: rgba(0,0,0,0.75);
          color: white !important;
          padding: 20px;
          text-align: center;
        }

        .member-info h4 {
          font-size: 24px;
          text-decoration: underline;
          font-weight: bolder;
          margin-bottom: 8px;
        }

        .member-info h4 .role .description{
          margin-top: 40px;
        }

        .member-info .role {
          font-style: italic;
          color: white;
          font-size: 23px;
        }

        .member-info .description {
          font-size: 22px;
          margin-top: 10px;
        }

        .member .social {
          margin-top: 15px;
        }

        .member .social a {
          margin: 0 6px;
          font-size: 18px;
          color: #ddd;
          transition: color 0.3s;
        }

        .member .social a:hover {
          color: var(--accent-color, #e5345b);
        }
      `}</style>

      <section id="chefs" className="chefs">
        <div className="container section-title text-center mb-5" data-aos="fade-up">
          <h2>Our Chefs</h2>
          <p>Meet the culinary team behind the flavor</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {chefsData.map(({ id, name, role, speciality, description, imgSrc, aosDelay }) => (
              <div key={id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={aosDelay}>
                <div className="member">
                  <img src={imgSrc} alt={name} />
                  <div className="badge-speciality">{speciality}</div>
                  <div className="member-info">
                    <h4>{name}</h4>
                    <div className="role">{role}</div>
                    <div className="description">{description}</div>
                    <div className="social">
                      <a href="#"><i className="bi bi-twitter-x"></i></a>
                      <a href="#"><i className="bi bi-facebook"></i></a>
                      <a href="#"><i className="bi bi-instagram"></i></a>
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Chefs;
