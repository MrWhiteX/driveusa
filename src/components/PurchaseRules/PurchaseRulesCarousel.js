import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const PurchaseRulesCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop labels labels="none">
      <div className="purchaseRulesCarousel">
        <div className="purchaseRulesCarousel__number">
          <div className="numberCircle">1</div>
        </div>
        <div className="purchaseRulesCarousel__wrapper">
          <h2 className="purchaseRulesCarousel__wrapper--title">LOREM IPSUM</h2>
          <span className="purchaseRulesCarousel__wrapper--description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            interdum sollicitudin massa. Maecenas nec venenatis neque. Cras sem
            elit, auctor ac ex vitae
          </span>
        </div>
      </div>

      <div className="purchaseRulesCarousel">
        <div className="purchaseRulesCarousel__number">
          <div className="numberCircle">2</div>
        </div>
        <div className="purchaseRulesCarousel__wrapper">
          <h2 className="purchaseRulesCarousel__wrapper--title">LOREM IPSUM</h2>
          <span className="purchaseRulesCarousel__wrapper--description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            interdum sollicitudin massa. Maecenas nec venenatis neque. Cras sem
            elit, auctor ac ex vitae
          </span>
        </div>
      </div>

      <div className="purchaseRulesCarousel">
        <div className="purchaseRulesCarousel__number">
          <div className="numberCircle">3</div>
        </div>
        <div className="purchaseRulesCarousel__wrapper">
          <h2 className="purchaseRulesCarousel__wrapper--title">LOREM IPSUM</h2>
          <span className="purchaseRulesCarousel__wrapper--description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            interdum sollicitudin massa. Maecenas nec venenatis neque. Cras sem
            elit, auctor ac ex vitae
            <br />
            <br />
            <br />
          </span>
        </div>
      </div>

      <div className="purchaseRulesCarousel">
        <div className="purchaseRulesCarousel__number">
          <div className="numberCircle">4</div>
        </div>
        <div className="purchaseRulesCarousel__wrapper">
          <h2 className="purchaseRulesCarousel__wrapper--title">LOREM IPSUM</h2>
          <span className="purchaseRulesCarousel__wrapper--description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            interdum sollicitudin massa. Maecenas nec venenatis neque. Cras sem
          </span>
        </div>
      </div>
    </Carousel>
  );
};

export default PurchaseRulesCarousel;
