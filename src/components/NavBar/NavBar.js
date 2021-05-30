import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { HashLink, NavHashLink } from "react-router-hash-link";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header__wrapper">
                <div className="hamburger__menu">
                  <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
                <h2>DRIVEUSA.PL</h2>
                {isOpen === false ? null : (
                  <div className="nav__mobile">
                    <ul className="nav__mobile--list">
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
                  </div>
                )}

                <div className="nav">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
