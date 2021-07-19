import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Hamburger from "hamburger-react";
import SubPagesMenu from "../Menu/SubPagesMenu";
import MobileMenu from "../Menu/MobileMenu";

const SubPagesNavBar = () => {
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
                <HashLink to="/#mainPage">
                  {" "}
                  <h2>DRIVEUSA.PL</h2>
                </HashLink>

                {isOpen === false ? null : (
                  <div className="nav__mobile">
                    <MobileMenu />
                  </div>
                )}

                <div className="nav">
                  <SubPagesMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubPagesNavBar;
