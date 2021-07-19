import React from "react";
import { HashLink } from "react-router-hash-link";

const SubPagesMenu = () => {
  return (
    <ul className="nav__list">
      <li>
        <HashLink to="/#mainPage">Strona Główna</HashLink>
      </li>
      <li>
        <HashLink to="/#aboutUs">O nas</HashLink>
      </li>
      <li>
        <HashLink to="/#pricingRules">Zasady Zakupu</HashLink>
      </li>
      <li>
        <HashLink to="/#gallery">Galeria</HashLink>
      </li>
    </ul>
  );
};

export default SubPagesMenu;
