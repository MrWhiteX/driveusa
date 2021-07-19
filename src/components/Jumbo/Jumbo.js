import React from "react";
import { Link } from "react-scroll";

const Jumbo = () => {
  return (
    <>
      <section id="mainPage" className="jumbo">
        <div className="container">
          <div className="welcome">
            <span>IMPORT SAMOCHODÓW Z USA ORAZ KANADY</span>
          </div>
        </div>
        <div class="arrow">
          <Link
            activeClass="active"
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
            <span class="text">Zjedź niżej</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Jumbo;
