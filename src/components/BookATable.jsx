import React, { useState } from "react";

const BookATable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // "loading", "error", "success"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    // Simulation d'envoi (remplace par ta logique d'API)
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        people: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section id="book-a-table" className="book-a-table section">
      <div className="container section-title" data-aos="fade-up">
        <h2>RESERVATION</h2>
        <p>Book a Table</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <form onSubmit={handleSubmit} role="form" className="php-email-form">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <input
                type="text"
                name="phone"
                className="form-control"
                id="phone"
                placeholder="Your Phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <input
                type="date"
                name="date"
                className="form-control"
                id="date"
                placeholder="Date"
                required
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <input
                type="time"
                name="time"
                className="form-control"
                id="time"
                placeholder="Time"
                required
                value={formData.time}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <input
                type="number"
                name="people"
                className="form-control"
                id="people"
                placeholder="# of people"
                required
                value={formData.people}
                onChange={handleChange}
                min={1}
              />
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="text-center mt-3">
            {status === "loading" && <div className="loading">Loading</div>}
            {status === "error" && (
              <div className="error-message">An error occurred. Please try again.</div>
            )}
            {status === "success" && (
              <div className="sent-message">
                Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!
              </div>
            )}

            <button type="submit" disabled={status === "loading"}>
              Book a Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookATable;
