import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faEye,
  faSmileBeam,
} from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselAbout = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop>
        <div className="singleItem">
          <div className="rectangle">
            <FontAwesomeIcon icon={faHandshake} size="3x" color="grey" />
          </div>
          <h2 className="singleItem--title">Lorem Ipsum</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            interdum sollicitudin massa. Maecenas nec venenatis neque.
          </span>
        </div>
        <div className="singleItem">
          <div className="rectangle">
            <FontAwesomeIcon icon={faEye} size="3x" color="grey" />
          </div>
          <h2 className="singleItem--title">Lorem Ipsum</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            interdum sollicitudin massa. Maecenas nec venenatis neque.
          </span>
        </div>
        <div className="singleItem">
          <div className="rectangle">
            <FontAwesomeIcon icon={faSmileBeam} size="3x" color="grey" />
          </div>
          <h2 className="singleItem--title">Lorem Ipsum</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            interdum sollicitudin massa. Maecenas nec venenatis neque.
          </span>
        </div>
      </Carousel>
    </>
  );
};

export default CarouselAbout;
