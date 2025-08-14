import React, { useState } from "react";

const Contact = () => {
  // État simple pour gérer les inputs du formulaire (optionnel)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // loading, error, success

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    // Simulation d'envoi formulaire
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>

      <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
        <iframe
          style={{ border: 0, width: "100%", height: "400px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.933258829229!2d9.701997!3d4.051056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106131b7c6b8f3a3%3A0x5c7e2e5f3f5e2c3e!2sDouala%2C%20Cameroun!5e0!3m2!1sfr!2scm!4v1690000000000!5m2!1sfr!2scm"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte de Douala"
        ></iframe>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=XRC7%2B78C+Yassa+Cameroun"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Itinéraire vers notre établissement
          </a>
        </div>
      </div>


      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Location</h3>
                <p>Yassa, Douala Littoral, Cameroun </p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Open Hours</h3>
                <p>
                  Tuesday-Dimanche:
                  <br />
                  8:00 AM - 22:00 PM
                </p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+237 657 03 37 29/6</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>RestoSwift@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form
              onSubmit={handleSubmit}
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="6"
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {status === "loading" && <div className="loading">Loading</div>}
                  {status === "error" && (
                    <div className="error-message">An error occurred. Try again.</div>
                  )}
                  {status === "success" && (
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  )}

                  <button type="submit" disabled={status === "loading"}>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
