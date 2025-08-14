import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cartSlice";
import { Link } from 'react-router-dom';

const Menu = () => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState('*');
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingId, setLoadingId] = useState(null);
  const [notification, setNotification] = useState({ show: false, item: null, fadeOut: false });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const playSound = () => {
    const audio = new Audio('/sound/bell.mp3');
    audio.play();
  };

  const handleOrder = (item) => {
    const confirmOrder = window.confirm("Voulez-vous commander ?");
    if (!confirmOrder) return;

    playSound();
    setLoadingId(item.title); // Utilise le titre comme identifiant unique

    setTimeout(() => {
      dispatch(addToCart({
        title: item.title,
        price: item.price,
        priceCfa: item.price,
        quantity: 1,
        img: item.img,
        desc: item.desc,
      }));

      setLoadingId(null);
      setNotification({ show: true, item, fadeOut: false });

      setTimeout(() => {
        setNotification((prev) => ({ ...prev, fadeOut: true }));
      }, 1500);

      setTimeout(() => {
        setNotification({ show: false, item: null, fadeOut: false });
      }, 2000);
    }, 3000); // ⏳ 10 secondes de chargement
  };

  const filters = [
    { label: 'Tous', value: '*' },
    { label: 'Locaux', value: 'locaux' },
    { label: 'P’tit Déjeuner', value: 'ptit-dejeuner' },
    { label: 'Etranger', value: 'etranger' },
    { label: 'Fast Food', value: 'fast-food' },
    { label: 'Dessert', value: 'dessert' },
    { label: 'Boisson', value: 'boisson' },
  ];

  const menuData = [// Catégorie : étranger
  {
    id: 1,
    img: '/assets/img/etranger/pasta.jpg',
    title: 'Pasta',
    price: 2000,
    desc: 'Pâtes fraîches servies avec sauce tomate aux fruits de mer ou basilic.',
    categories: ['etranger'],
  },
  {
    id: 1,
    img: '/assets/img/etranger/ramen.jpg',
    title: 'Ramen',
    price: 3045,
    desc: 'Nouilles japonaises dans un bouillon parfumé avec porc ou légumes.',
    categories: ['etranger'],
  },
  {
    id: 1,
    img: '/assets/img/etranger/rice.jpg',
    title: 'Rice',
    price: 2095,
    desc: 'Riz parfumé accompagné de légumes sautés aux saveurs exotiques.',
    categories: ['etranger'],
  },
  {
    id: 1,
    img: '/assets/img/etranger/Somon.jpg',
    title: 'Somon',
    price: 2080,
    desc: 'Feuilles d’épinards sautées à la crème, servies en accompagnement.',
    categories: ['etranger'],
  },
  {
    id: 1,
    img: '/assets/img/etranger/sushi.jpg',
    title: 'Sushi',
    price: 5025,
    desc: 'Boulettes de riz vinaigré avec poisson cru et légumes frais.',
    categories: ['etranger'],
  },
  {
    id: 1,
    img: '/assets/img/etranger/tacos.jpg',
    title: 'Tacos',
    price: 1150,
    desc: 'Tortilla farcie de viande épicée, fromage et sauce maison.',
    categories: ['etranger'],
  },

  // Catégorie : ptit-dejeuner
  {
    id: 2,
    img: '/assets/img/p.dejeuner/sam.jpg',
    title: 'Samousa',
    price: 315,
    desc: 'Triangle croustillant farci de viande épicée ou légumes frais.',
    categories: ['ptit-dejeuner'],
  },
  {
    id: 2,
    img: '/assets/img/p.dejeuner/Salavocat.jpg',
    title: 'Salade avocat',
    price: 1325,
    desc: 'Crêpes garnies de chocolat, banane, confiture ou lait concentré.',
    categories: ['ptit-dejeuner'],
  },
  {
    id: 2,
    img: '/assets/img/p.dejeuner/bh.jpg',
    title: 'Beignet Bouillie Haricot',
    price: 1245,
    desc: 'Combo typique camerounais servi chaud et nourrissant.',
    categories: ['ptit-dejeuner'],
  },
  {
    id: 2,
    img: '/assets/img/p.dejeuner/pop cake.jpg',
    title: 'Pop Cake',
    price: 2405,
    desc: 'Mini gâteaux sucrés en bouchée, parfaits pour le petit matin.',
    categories: ['ptit-dejeuner'],
  },
  {
    id: 2,
    img: '/assets/img/p.dejeuner/coffee.jpg',
    title: 'Café au lait',
    price: 415,
    desc: 'Boisson chaude composée de café noir et lait local.',
    categories: ['ptit-dejeuner'],
  },
  {
    id: 2,
    img: '/assets/img/p.dejeuner/milk.jpg',
    title: 'Lait Cozam',
    price: 1025,
    desc: 'Lait sucré apprécié au Cameroun, servi chaud ou froid.',
    categories: ['ptit-dejeuner'],
  },

  // Catégorie : locaux
  {
    id: 3,
    img: '/assets/img/local/eru.jpg',
    title: 'Water fufu & Eru',
    price: 2045,
    desc: 'Plat du Sud-Ouest : pâte de manioc avec sauce verte épicée aux légumes.',
    categories: ['locaux'],
  },
  {
    id: 3,
    img: '/assets/img/local/socejone.jpg',
    title: 'Taro & Sauce Jaune',
    price: 3025,
    desc: 'Taro pilé accompagné d’une sauce d’arachide fermentée traditionnelle.',
    categories: ['locaux'],
  },
  {
    id: 3,
    img: '/assets/img/local/mbongo.jpg',
    title: 'Mbongo Bassaa',
    price: 2415,
    desc: 'Poisson cuit dans une sauce noire aux épices camerounaises.',
    categories: ['locaux'],
  },
  {
    id: 3,
    img: '/assets/img/local/sanga.jpg',
    title: 'Sanga',
    price: 2025,
    desc: 'Maïs frais mélangé aux légumes et huile rouge locale.',
    categories: ['locaux'],
  },
  {
    id: 3,
    img: '/assets/img/local/gombo.jpg',
    title: 'Gombo & Couscous',
    price: 3105,
    desc: 'Sauce aux gombos servie avec couscous de maïs traditionnel.',
    categories: ['locaux'],
  },
  {
    id: 3,
    img: '/assets/img/local/esc.jpg',
    title: 'Escargot',
    price: 3145,
    desc: 'Escargots sautés aux condiments locaux, très apprécié.',
    categories: ['locaux'],
  },

  // Catégorie : fast-food
  {
    id: 3,
    img: '/assets/img/Fastfood/pixa.jpg',
    title: 'Pizza multi-saveur',
    price: 2095,
    desc: 'Pizza garnie de viandes, légumes et fromages fondants.',
    categories: ['fast-food'],
  },
  {
    id: 3,
    img: '/assets/img/Fastfood/pouletp.jpg',
    title: 'Poulet Pané',
    price: 3125,
    desc: 'Poulet frit croustillant aux épices locales.',
    categories: ['fast-food'],
  },
  {
    id: 3,
    img: '/assets/img/Fastfood/sand.jpg',
    title: 'Sandwich',
    price: 2145,
    desc: 'Pain garni de viande, crudités et sauces maison.',
    categories: ['fast-food'],
  },
  {
    id: 3,
    img: '/assets/img/Fastfood/tost.jpg',
    title: 'Tosts',
    price: 1015,
    desc: 'Tranches de pain grillées avec beurre ou confiture.',
    categories: ['fast-food'],
  },
  {
    id: 3,
    img: '/assets/img/Fastfood/tripleBurger.jpg',
    title: 'Hamburger',
    price: 3045,
    desc: 'Pain moelleux garni de steak, légumes et fromage.',
    categories: ['fast-food'],
  },

  // Catégorie : boisson
  {
    id: 4,
    img: '/assets/img/boisson/co.jpg',
    title: 'Co',
    price: 1245,
    desc: 'Soda rafraîchissant en bouteille ou canette.',
    categories: ['boisson'],
  },
  {
    id: 4,
    img: '/assets/img/boisson/Foléré.jpg',
    title: 'Foléré',
    price: 1045,
    desc: 'jus naturel sucrée, populaire dans les fast-foods.',
    categories: ['boisson'],
  },
  {
    id: 4,
    img: '/assets/img/boisson/muljus.jpg',
    title: 'Can',
    price: 1045,
    desc: 'Soda en canette pratique pour emporter.',
    categories: ['boisson'],
  },
  {
    id: 4,
    img: '/assets/img/boisson/cocktail.jpg',
    title: 'Cocktail',
    price: 2025,
    desc: 'Boisson fruitée artisanale, souvent servie fraîche.',
    categories: ['boisson'],
  },
  {
    id: 4,
    img: '/assets/img/boisson/hennessy.jpg',
    title: 'Hennessy',
    price: 15995,
    desc: 'Cognac haut de gamme à consommer avec modération.',
    categories: ['boisson'],
  },
  {
    id: 4,
    img: '/assets/img/boisson/heineken.jpg',
    title: 'Heineken',
    price: 1095,
    desc: 'Bière blonde en bouteille très consommée en ville.',
    categories: ['boisson'],
  },

    // Catégorie : dessert
  {
    id: 5,
    img: '/assets/img/dessert/cake.jpg',
    title: 'Cake',
    price: 2025,
    desc: 'Gâteau moelleux parfumé à la vanille ou au chocolat, souvent servi au goûter.',
    categories: ['dessert'],
  },
  {
    id: 5,
    img: '/assets/img/dessert/glace.jpg',
    title: 'Glace',
    price: 1575,
    desc: 'Crème glacée artisanale ou industrielle, disponible en plusieurs saveurs.',
    categories: ['dessert'],
  },
  {
    id: 5,
    img: '/assets/img/dessert/pop cake.jpg',
    title: 'Cake Pop',
    price: 1045,
    desc: 'Mini gâteaux en forme de sucette, idéal pour les enfants ou en dessert individuel.',
    categories: ['dessert'],
  },
  {
    id: 5,
    img: '/assets/img/dessert/tarte.jpg',
    title: 'Tarte',
    price: 2085,
    desc: 'Pâte sablée garnie de fruits ou crème pâtissière, servie froide ou tiède.',
    categories: ['dessert'],
  },
  {
    id: 5,
    img: '/assets/img/dessert/berries.jpg',
    title: 'Berries',
    price: 1215,
    desc: 'Fruits rouges frais parfois accompagnés de crème fouettée ou yaourt.',
    categories: ['dessert'],
  }

    // Ton tableau complet ici (corrigé avec des id uniques)
  ];

  const filteredMenus = menuData.filter((menu) => {
    const matchesCategory = activeFilter === '*' || menu.categories.includes(activeFilter);
    const matchesSearch = menu.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredMenus.length / itemsPerPage);
  const paginatedMenus = filteredMenus.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="menu" className="menu-section">
      <div className="container text-center section-title" data-aos="fade-up">
        <h2 className="mb-2">Menu</h2>
        <p className="mb-4">Découvrez nos spécialités faites maison</p>
      </div>

      {/* Filtres + Recherche */}
      <div className="menu-controls" data-aos="fade-up" data-aos-delay="100">
        <div className="menu-filters">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => {
                setActiveFilter(filter.value);
                setSearchTerm('');
                setCurrentPage(1);
              }}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Rechercher un plat..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Notification */}
      {notification.show && (
        <div className={`order-notification ${notification.fadeOut ? 'fade-out' : ''}`} data-aos="fade-up">
          ✅ <strong>{notification.item.title}</strong> ajouté au panier !
          <Link to="/cart" className="view-cart-link">Voir mon panier</Link>
        </div>
      )}

      {/* Résumé de filtre actif */}
      <div className="filter-summary" data-aos="fade-up" data-aos-delay="150">
        <p>
          <strong>Catégorie :</strong>{' '}
          {activeFilter === '*' ? 'Tous les plats' : activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
          {' '}– {filteredMenus.length} résultat{filteredMenus.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Cartes de menu */}
      <div className="container">
        <div className="menu-grid" data-aos="fade-up" data-aos-delay="200">
          {paginatedMenus.map((item) => (
            <div key={item.title} className="menu-card">
              <div className="menu-card-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="menu-card-content">
                <h5>{item.title}</h5>
                <span className="menu-price">{item.price} FCFA</span>
                <p>{item.desc}</p>
                <button
                  onClick={() => handleOrder(item)}
                  className="btn-order"
                  disabled={loadingId === item.title}
                >
                  {loadingId === item.title ? 'Chargement...' : 'Commander'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
