import React, { useState } from "react";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";
import Menu from "../Menu/Menu";
import MobileMenu from "../Menu/MobileMenu";

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
                <Link
                  activeClass="active"
                  to="mainPage"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <h2>DRIVEUSA.PL</h2>
                </Link>

                {isOpen === true ? (
                  <div className="nav__mobile">
                    <MobileMenu />
                  </div>
                ) : null}

                <div className="nav">
                  <Menu />
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
