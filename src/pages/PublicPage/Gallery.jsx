import React, { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

const galleryImages = [
  "assets/img/gallery/v.jpg",
  "assets/img/gallery/gal.jpg",
  "assets/img/gallery/fruit.jpg",
  "assets/img/gallery/gallery-1.jpg",
  "assets/img/gallery/tera.jpg",
  "assets/img/gallery/nour.jpg",
  "assets/img/gallery/gallery-3.jpg",
  "assets/img/gallery/cuis.jpg",
  "assets/img/gallery/galle.jpg",
  "assets/img/gallery/ter.jpg",
  "assets/img/gallery/gale.jpg",
  "assets/img/gallery/gallery-4.jpg",
];

const Gallery = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <section id="gallery" className="gallery section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
        <p>Some photos from Our Restaurant</p>
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {galleryImages.map((img, index) => (
            <div className="col-lg-3 col-md-4" key={index}>
              <div className="gallery-item">
                <a href={img} className="glightbox" data-gallery="images-gallery">
                  <img
                    src={img}
                    alt={`Gallery Image ${index + 1}`}
                    className="img-fluid gallery-img"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
