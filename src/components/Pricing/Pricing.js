import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="pricing__wrapper">
              <h2 className="pricing__title">ILE TO KOSZTUJE?</h2>
              <span className="pricing__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                interdum sollicitudin massa. Maecenas nec venenatis neque. Cras
                sem elit, auctor ac ex vitae, volutpat condimentum nisi.
              </span>
              <div className="button__container">
                <Link className="pricing__button" to="/calc">
                  OBLICZ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
