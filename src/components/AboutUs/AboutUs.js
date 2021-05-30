import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faEye,
  faSmileBeam,
} from "@fortawesome/free-solid-svg-icons";
import CarouselAbout from "../CarouselAbout/CarouselAbout";

const AboutUs = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="about__wrapper">
                <div id="aboutUs" className="about__description">
                  <h2 className="about__title">KIM JESTEŚMY?</h2>
                  <span>
                    Jesteśmy profesjonalną firmą, która powstała z zamiłowania
                    do Amerykańskiej motoryzacji. Zajmujemy się sprowadzaniem
                    aut, motocykli, quadów i innych pojazdów ze Stanów
                    Zjednoczonych do Polski. Zakupów dokonujemy na podstawie
                    licencji dealera samochodowego przez co możemy brać udział
                    we wszystkich licytacjach w USA oraz Kanadzie. Wybierając
                    naszą firmę masz gwarancję indywidualnego podejścia oraz
                    najlepszych cen.
                  </span>
                  <div className="about__single">
                    <div className="singleItem">
                      <div className="rectangle">
                        <FontAwesomeIcon
                          icon={faHandshake}
                          size="6x"
                          color="grey"
                        />
                      </div>
                      <h2 className="singleItem--title">Lorem Ipsum</h2>
                      <p className="singleItem--text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc interdum sollicitudin massa. Maecenas nec venenatis
                        neque.
                      </p>
                    </div>
                    <div className="singleItem">
                      <div className="rectangle">
                        <FontAwesomeIcon icon={faEye} size="6x" color="grey" />
                      </div>
                      <h2 className="singleItem--title">Lorem Ipsum</h2>
                      <p className="singleItem--text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc interdum sollicitudin massa. Maecenas nec venenatis
                        neque.
                      </p>
                    </div>
                    <div className="singleItem">
                      <div className="rectangle">
                        <FontAwesomeIcon
                          icon={faSmileBeam}
                          size="6x"
                          color="grey"
                        />
                      </div>
                      <h2 className="singleItem--title">Lorem Ipsum</h2>
                      <p className="singleItem--text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc interdum sollicitudin massa. Maecenas nec venenatis
                        neque.
                      </p>
                    </div>
                  </div>
                  <div className="carousel">
                    <CarouselAbout />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
