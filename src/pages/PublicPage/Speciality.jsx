import { useState } from "react";
import { FaUtensils, FaLeaf, FaFire } from "react-icons/fa";

const tabs = {
  emblematiques: "Plats emblématiques",
  traditionnels: "Plats traditionnels",
  streetFood: "Street Food",
};

const icons = {
  FaUtensils: <FaUtensils />,
  FaLeaf: <FaLeaf />,
  FaFire: <FaFire />,
};

const specialsData = {
  emblematiques: [
    {
      id: "ndole",
      title: "Ndolé",
      heading: "Feuilles amères et crevettes",
      italicText: "Le plat emblématique de Douala",
      desc: "Souvent servi avec du bobolo ou des plantains frits. Parfumé, nourrissant, et irrésistible.",
      img: "/assets/img/local/ndolet.jpg",
      icon: "FaUtensils",
      badge: "Emblématique",
    },
    {
      id: "poulet-dg",
      title: "Poulet DG",
      heading: "Poulet aux bananes plantains",
      italicText: "Une fusion chic de viande et légumes",
      desc: "Servi en plat principal dans les grandes occasions. Coloré et savoureux.",
      img: "/assets/img/SppouletD.jpg",
      icon: "FaUtensils",
      badge: "Emblématique",
    },
    {
      id: "soya",
      title: "Soya",
      heading: "Brochettes de bœuf grillé",
      italicText: "Marinade épicée et goût fumé",
      desc: "Idéal à l’apéro ou lors de soirées chill. Se déguste sur le pouce.",
      img: "/assets/img/SpCôte de Boeuf.jpg",
      icon: "FaFire",
      badge: "Emblématique",
    },
    {
      id: "mafe",
      title: "Mafé",
      heading: "Sauce arachide au bœuf",
      italicText: "Douce, épicée et fondante",
      desc: "Accompagné de riz ou couscous, ce plat d’origine sahélienne séduit par sa richesse et sa rondeur.",
      img: "/assets/img/SpMafé.jpg",
      icon: "FaFire",
      badge: "Emblématique",
    },
    
  ],
  traditionnels: [
    {
      id: "eru",
      title: "Eru",
      heading: "Feuilles d'okok et waterleaf",
      italicText: "Plat du Sud-Ouest avec viande et poisson fumé",
      desc: "Traditionnellement accompagné de fufu. Un goût sauvage et fumé.",
      img: "/assets/img/local/eru.jpg",
      icon: "FaLeaf",
      badge: "Traditionnel",
    },
    {
      id: "koki",
      title: "Koki",
      heading: "Gâteau de haricots rouges",
      italicText: "Cuit dans des feuilles de bananier",
      desc: "Riche en protéines et aux saveurs rustiques. À servir avec du manioc.",
      img: "/assets/img/local/koki.jpg",
      icon: "FaLeaf",
      badge: "Traditionnel",
    },
    {
      id: "mbongo",
      title: "Mbongo Tchobi",
      heading: "Poisson noir épicé",
      italicText: "Plat emblématique du Littoral",
      desc: "Préparé avec du poisson fumé dans une sauce épaisse aux épices torréfiées. À savourer avec du baton ou du riz.",
      img: "/assets/img/local/mbongo.jpg",
      icon: "FaLeaf",
      badge: "Traditionnel",
    },
    {
      id: "okok",
      title: "Okok",
      heading: "Feuilles écrasées et pâte d’arachide",
      italicText: "Plat forestier du Centre Cameroun",
      desc: "Servi avec baton de manioc, ce mets est à la fois amer et doux, très nutritif.",
      img: "/assets/img/okok.jpg",
      icon: "FaLeaf",
      badge: "Traditionnel",
    },

  ],
  streetFood: [
    {
      id: "banane-frites",
      title: "Bananes frites",
      heading: "Sucrées et croustillantes",
      italicText: "Compagnon indispensable des plats principaux",
      desc: "Simple mais irrésistible, parfait avec poisson braisé ou poulet DG.",
      img: "/assets/img/plant.jpg",
      icon: "FaFire",
      badge: "Street Food",
    },
    {
      id: "riz-blanc",
      title: "Riz Blanc",
      heading: "Simplicité à savourer",
      italicText: "Neutre mais jamais fade",
      desc: "Accompagnement universel, le riz blanc s’invite dans tous les plats. Son goût léger met en valeur les sauces riches, les grillades, et les mijotés camerounais.",
      img: "/assets/img/riz.jpg",
      icon: "FaConciergeBell",
      badge: "Accompagnement",
    },
    {
      id: "pommes-de-terre",
      title: "Pommes de terre",
      heading: "Versatilité dorée",
      italicText: "Croquantes ou fondantes",
      desc: "Grillées, sautées, bouillies ou en purée, les pommes de terre savent s’adapter. Elles accompagnent aussi bien les sauces piquantes que les grillades de poisson ou poulet.",
      img: "/assets/img/pom.jpg",
      icon: "FaLeaf",
      badge: "Accompagnement",
    }

  ],
};

const Specials = () => {
  const [activeTab, setActiveTab] = useState("emblematiques");

  return (
    <div className="specials-container">
    <section id="specials" className="specials section">
      <div className="container section-title" data-aos="fade-down">
        <h2>🍽️ Spécialités Camerounaises</h2>
        <p className="text-white">Découvrez nos plats traditionnels et populaires</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
  <ul className="nav nav-tabs justify-content-center mb-4">
    {Object.entries(tabs).map(([key, label]) => (
      <li className="nav-item" key={key}>
        <button
          className={`nav-link ${activeTab === key ? "active" : ""}`}
          onClick={() => setActiveTab(key)}
        >
          {label}
        </button>
      </li>
    ))}
  </ul>

  <div className="row gy-4">
  {specialsData[activeTab].map((dish, index) => (
    <div
      key={dish.id}
      className="col-12 col-md-6 d-flex"
      data-aos="fade-up"
      data-aos-delay={200 + index * 100}
    >
      <div className="special-card card w-100">
        <span className="badge position-absolute">
          {dish.badge}
        </span>

        <div className="overflow-hidden rounded-top">
          <img
            src={dish.img}
            alt={dish.title}
            className="animated-img img-fluid w-100"
          />
        </div>

        <div className="details card-body">
          <h4 className="d-flex align-items-center gap-2 text-primary">
            {icons[dish.icon]} {dish.heading}
          </h4>
          <h5 className="fw-semibold text-dark">{dish.title}</h5>
          <p className="fst-italic text-muted mb-1">{dish.italicText}</p>
          <p className="text-secondary">{dish.desc}</p>
        </div>
      </div>
    </div>
  ))}
</div>

</div>

    </section>
    </div>
  );
};

export default Specials;
