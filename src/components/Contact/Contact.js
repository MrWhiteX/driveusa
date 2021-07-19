import React from "react";
import ScrollToTop from "react-scroll-to-top";

const Contact = () => {
  const handleContactSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="contact__wrapper">
              <h2 className="contact__title"> NAPISZ DO NAS</h2>
              <p className="contact__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                interdum sollicitudin massa. Maecenas nec venenatis neque. Cras
                sem elit, auctor ac ex vitae, volutpat condimentum nisi.
              </p>
              <div className="contact__form">
                <form>
                  <div className="row">
                    <div className="col-sm-12 col-md-4">
                      <label>
                        <span>Imię:</span> <br /> <br />
                        <input type="text" name="name" />
                      </label>
                    </div>
                    <div className="col-sm-12 col-md-4">
                      <label>
                        <span>Nazwisko:</span> <br /> <br />
                        <input type="text" name="surname" />
                      </label>
                    </div>

                    <div className="col-sm-12 col-md-4">
                      <label>
                        <span>Email:</span> <br /> <br />
                        <input type="text" name="email" />
                      </label>
                    </div>
                  </div>
                  <label className="textArea__wrapper">
                    Treść Wiadomości: <br /> <br />
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </label>
                  <div className="form__button">
                    <button onClick={handleContactSubmit}>Wyślij</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop smooth color="#00b0aa" />
    </section>
  );
};

export default Contact;
