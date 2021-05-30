import React, { useState, useEffect } from "react";
import fetchCars from "./data/CarsApi";
import LoadingIcon from "../UI/LoadingIcon/LoadingIcon";

const OurCars = () => {
  const [car, setCar] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCars()
      .then((data) => {
        setCar(data);
        setLoading(false);
      })

      .catch((err) => {
        console.log("Błąd!", err);
      });
  }, []);

  return (
    <section id="gallery" className="ourCars">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="ourCars__wrapper">
              <h2 className="ourCars__title">NASZE SAMOCHODY</h2>
              <div className="cars__wrapper">
                <div className="row">
                  {car.map((singleCar) => {
                    return (
                      <div key={singleCar.id} className="col-sm-12 col-md-6">
                        {loading ? (
                          <LoadingIcon />
                        ) : (
                          <div className="single__car">
                            <img
                              style={{
                                border: "3px solid #4db4ba",
                                marginBottom: 15,
                              }}
                              src={singleCar.image}
                              alt=""
                            />
                            <div className="single__car--description">
                              <p>
                                MARKA: <span>{singleCar.brand}</span>
                              </p>
                              <p>
                                MODEL: <span>{singleCar.name}</span>
                              </p>
                              <p>
                                Nadwozie: <span>{singleCar.body}</span>
                              </p>
                              <p>
                                Rok: <span>{singleCar.year}</span>
                              </p>
                              <p>
                                Pojemnosc: <span>{singleCar.engine}</span>
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCars;
