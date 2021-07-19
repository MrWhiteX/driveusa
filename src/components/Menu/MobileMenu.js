import React from "react";
import { Link } from "react-scroll";

const MobileMenu = () => {
  return (
    <ul className="nav__mobile--list">
      <li>
        <Link
          activeClass="active"
          to="mainPage"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Strona Główna
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="aboutUs"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          O nas
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="pricingRules"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Zasady Zakupu
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="gallery"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Galeria
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
