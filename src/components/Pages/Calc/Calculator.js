import React, { useState, useEffect } from "react";
import fetchCurrencies from "./data/NBPApi";
import Location from "./data/Location";
import PriceTable from "./data/PriceTable";
import LoadingIcon from "../../UI/LoadingIcon/LoadingIcon";
import Radio from "@material-ui/core/Radio";
import Alert from "@material-ui/lab/Alert";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const Calculator = () => {
  const [dataCurrency, setDataCurrency] = useState([
    {
      USD: 0,
      EUR: 0,
    },
  ]);
  const [customsClearence, setCustomsClearence] = useState(0);
  const [transport, setTransport] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showPriceTable, setShowPriceTable] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    carPrice: null,
  });

  const houseCompanyFee = parseInt(form.carPrice) * 0.07; // Prowizja domu aukcyjnego

  const sumToEur =
    (parseInt(form.carPrice) + houseCompanyFee + parseInt(form.cityPrice)) *
    0.821; // Cena samochodu + prowizja domu aukcyjnego + transportu w przeliczeniu USD -> EUR
  const vatSum = sumToEur * 0.19; // KWOTA VAT

  const customDuty = sumToEur * 0.09; // CLO

  const customClearence = vatSum + customDuty + 300; // VAT + CLO + koszty obsługi agencji celnej

  useEffect(() => {
    fetchCurrencies()
      .then((currencies) => {
        setDataCurrency((prevState) => {
          return {
            ...prevState,
            USD: currencies.ask.toFixed(2),
            EUR: currencies.EUR.ask.toFixed(2),
          };
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log("Błąd!", err);
      });
    if (dataCurrency === 0) {
      return (
        <h1>
          <LoadingIcon />
        </h1>
      );
    } else {
      return <h1>{dataCurrency}</h1>;
    }
  }, []);

  useEffect(() => {
    if (form.personality == "company") {
      setCustomsClearence(customDuty + 300);
    } else {
      setCustomsClearence(customClearence);
    }

    if (form.carType == "van") {
      setTransport(form.cityPrice * 1.2);
    } else if (form.carType == "motorbike") {
      setTransport(form.cityPrice - 300);
    } else {
      setTransport(form.cityPrice);
    }
    return () => {};
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsg = validate(form);
    if (errorMsg) {
      setError(errorMsg);
      return;
    } else {
      setError(null);
    }
    setShowPriceTable(true);
    console.log(`form submitted`, form);
  };

  return (
    <section className="calc">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="calc__wrapper">
              <h2 className="calc__title">Ile to kosztuje?</h2>
              <span className="calc__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                interdum sollicitudin massa. Maecenas nec venenatis neque. Cras
                sem elit, auctor ac ex vitae, volutpat condimentum nisi.
                {error && <Alert severity="error">{error}</Alert>}
                <div className="calc__form">
                  <form>
                    <FormControl component="fieldset">
                      <FormLabel
                        component="legend"
                        style={{
                          color: "white",
                          paddingBottom: 15,
                          textAlign: "left",
                        }}
                      >
                        Rodzaj Klienta:
                      </FormLabel>
                      <RadioGroup row name="row-radio-buttons-group">
                        <FormControlLabel
                          name="personality"
                          onChange={handleChange}
                          value="person"
                          control={<Radio style={{ color: "#4DB4BA" }} />}
                          label="Osoba Fizyczna"
                        />
                        <FormControlLabel
                          name="personality"
                          onChange={handleChange}
                          value="company"
                          control={<Radio style={{ color: "#4DB4BA" }} />}
                          label="Firma"
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                      <FormLabel
                        component="legend"
                        style={{
                          color: "white",
                          paddingBottom: 15,
                          paddingTop: 15,
                          textAlign: "left",
                        }}
                      >
                        Rodzaj pojazdu:
                      </FormLabel>
                      <RadioGroup row name="row-radio-buttons-group">
                        <FormControlLabel
                          name="carType"
                          onChange={handleChange}
                          value="car"
                          control={<Radio style={{ color: "#4DB4BA" }} />}
                          label="Osobowe"
                        />
                        <FormControlLabel
                          name="carType"
                          onChange={handleChange}
                          value="van"
                          control={<Radio style={{ color: "#4DB4BA" }} />}
                          label="Van / Suv"
                        />
                        <FormControlLabel
                          name="carType"
                          onChange={handleChange}
                          value="motorbike"
                          control={<Radio style={{ color: "#4DB4BA" }} />}
                          label="Motocykl"
                        />
                        <FormControlLabel
                          name="carType"
                          onChange={handleChange}
                          value="vintage"
                          control={<Radio style={{ color: "#4DB4BA" }} />}
                          label="Zabytek"
                        />
                      </RadioGroup>
                    </FormControl>
                    <span style={{ paddingTop: 30, paddingBottom: 20 }}>
                      Kwota samochodu w USD:
                    </span>
                    <input
                      className="inputPrice"
                      placeholder="Wprowadź cenę"
                      type="number"
                      name="carPrice"
                      value={form.carPrice}
                      onChange={handleChange}
                    />{" "}
                    <span style={{ paddingTop: 30, paddingBottom: 20 }}>
                      Lokalizcja domu aukcyjnego, w którym znajduję się pojazd
                    </span>
                    <select
                      className="citySelect"
                      name="cityPrice"
                      onChange={handleChange}
                    >
                      {Location.map((singleCity) => {
                        return (
                          <option key={singleCity.id} value={singleCity.price}>
                            {singleCity.name}
                          </option>
                        );
                      })}
                    </select>
                    <div className="calculator__btn">
                      <input
                        className="calcButton"
                        type="submit"
                        value="Oblicz"
                        onClick={handleSubmit}
                      />
                    </div>
                  </form>
                </div>
                <div className="price_table">
                  {showPriceTable === false ? null : (
                    <PriceTable
                      carPrice={form.carPrice}
                      customsClearence={customsClearence}
                      transport={transport}
                      USD={dataCurrency.USD}
                      EUR={dataCurrency.EUR}
                    />
                  )}
                </div>
                <div className="currency" style={{ textAlign: "center" }}>
                  <p>
                    {" "}
                    {loading ? (
                      <LoadingIcon />
                    ) : (
                      `Dzisiejszy kurs EUR to: ${dataCurrency.EUR} PLN`
                    )}
                  </p>
                  <p>
                    {" "}
                    {loading ? (
                      <LoadingIcon />
                    ) : (
                      `Dzisiejszy kurs USD to: ${dataCurrency.USD} PLN`
                    )}
                  </p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;

const validate = (form) => {
  if (!form.personality) {
    return "Rodzaj klienta jest wymagany";
  }

  if (!form.carType) {
    return "Rodzaj pojazdu jest wymagany";
  }

  if (!form.carPrice) {
    return "Cena pojazdu jest wymagana";
  } else if (form.carPrice <= 0) {
    return "Wprowadź cenę większą od 0";
  }
  if (!form.cityPrice) {
    return "Wybierz lokalizację";
  }

  return null;
};
