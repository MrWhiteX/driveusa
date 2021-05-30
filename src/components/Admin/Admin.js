import React, { useState, useEffect } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Alert from "@material-ui/lab/Alert";
import fetchCars from "../OurCars/data/CarsApi";
import FetchDeleteCar from "./data/FetchDeleteCar";
import FetchAddCar from "./data/FetchAddCar";

const Admin = () => {
  const [formComplete, setFormComplete] = useState(false);
  const [error, setError] = useState(null);
  const [actualCars, setActualCars] = useState([{}]);
  const [newCar, setNewCar] = useState([]);
  const [carToDelete, setCarToDelete] = useState(null);

  useEffect(() => {
    fetchCars().then((data) => {
      setActualCars(data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCar((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const addCarHandler = (e) => {
    e.preventDefault();
    const errorMsg = validate(newCar);
    if (errorMsg) {
      setError(errorMsg);
      return;
    } else {
      setFormComplete(true);
      setError(null);
    }

    console.log(`form submitted`, newCar);
  };

  return (
    <section className="apanel">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="apanel__wrapper">
              <h1 className="apanel__title">Witaj kierowniku złoty</h1>
              <span className="apanel__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                interdum sollicitudin massa. Maecenas nec venenatis neque. Cras
                sem elit, auctor ac ex vitae, volutpat condimentum nisi.
              </span>

              <div className="newData">
                <h2>Dodaj nowy samochód</h2>
                {error && <Alert severity="error">{error}</Alert>}

                <form>
                  <label>
                    Marka Samochodu
                    <input
                      style={{ marginTop: 10 }}
                      placeholder="Wpisz markę"
                      type="text"
                      name="brand"
                      value={newCar.brand}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Model Samochodu
                    <input
                      style={{ marginTop: 10 }}
                      placeholder="Wpisz model"
                      type="text"
                      name="name"
                      value={newCar.name}
                      onChange={handleChange}
                    />{" "}
                  </label>
                  <label>
                    Nadwozie
                    <input
                      style={{ marginTop: 10 }}
                      placeholder="Wpisz nadwozie"
                      type="text"
                      name="body"
                      value={newCar.body}
                      onChange={handleChange}
                    />{" "}
                  </label>
                  <label>
                    Rok Produkcji
                    <input
                      style={{ marginTop: 10 }}
                      placeholder="Wpisz rok produkcji"
                      type="number"
                      name="year"
                      value={newCar.year}
                      onChange={handleChange}
                    />{" "}
                  </label>
                  <label>
                    Pojemność
                    <input
                      style={{ marginTop: 10 }}
                      placeholder="Wpisz pojemność"
                      type="text"
                      name="engine"
                      value={newCar.engine}
                      onChange={handleChange}
                    />{" "}
                  </label>

                  <div className="addCar__btn">
                    <input
                      className="addCarButton"
                      type="submit"
                      value="Dodaj Samochód"
                      onClick={addCarHandler}
                    />
                  </div>
                  {formComplete === false ? null : (
                    <FetchAddCar newCar={newCar} />
                  )}
                </form>
              </div>

              <div className="actualData">
                <h2>Aktualne dane wyświetlane w sekcji Nasze samochody </h2>
                <p>Uwaga! Minimum oraz maximum 6 pojazdów</p>
                <table className="cars__table">
                  <tbody>
                    {actualCars.map((singleCar) => {
                      return (
                        <tr key={singleCar.id}>
                          <DeleteForeverIcon
                            style={{ cursor: "pointer" }}
                            onClick={() => setCarToDelete(singleCar.id)}
                          />
                          <td>{singleCar.brand}</td>
                          <td>{singleCar.name}</td>
                          <td>{singleCar.body}</td>
                          <td>{singleCar.year}</td>
                          <td>{singleCar.engine}</td>
                        </tr>
                      );
                    })}
                    <FetchDeleteCar carToDelete={carToDelete} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;

const validate = (newCar) => {
  if (!newCar.brand) {
    return "Pole marka nie może być puste";
  }

  if (!newCar.name) {
    return "Pole model nie może być puste";
  }

  if (!newCar.body) {
    return "Pole nadwozie nie może być puste";
  }
  if (!newCar.year) {
    return "Pole roku produkcji nie może być puste";
  }

  if (!newCar.year) {
    return "Pole pojemności silnika nie może być puste";
  }

  return null;
};
