import React from "react";
import PurchaseRulesCarousel from "./PurchaseRulesCarousel";
import DesktopTimeLine from "./DekstopTimeline";

const PurchaseRules = () => {
  return (
    <section className="purchaseRules">
      <div className="container">
        <div className="row">
          <div className="col">
            <div id="pricingRules" className="purchaseRules__wrapper">
              <h2 className="purchaseRules__wrapper--title">ZASADY ZAKUPU</h2>
              <span className="purchaseRules__wrapper--description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                interdum sollicitudin massa. Maecenas nec venenatis neque. Cras
                sem elit, auctor ac ex vitae, volutpat condimentum nisi.
              </span>
              <div className="timeline">
                <DesktopTimeLine />
              </div>
            </div>
            <PurchaseRulesCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseRules;
