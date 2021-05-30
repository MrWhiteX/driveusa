import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import NavBar from "./components/NavBar/NavBar";
import Jumbo from "./components/Jumbo/Jumbo";
import AboutUs from "./components/AboutUs/AboutUs";
import PurchaseRules from "./components/PurchaseRules/PurchaseRules";
import TransactionIMG from "./components/TransactionIMG/TransactionIMG";
import Pricing from "./components/Pricing/Pricing";
import CamaroIMG from "./components/TransactionIMG/CamaroIMG";
import OurCars from "./components/OurCars/OurCars";
import ContactIMG from "./components/ContactIMG/ContactIMG";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Calculator from "./components/Pages/Calc/Calculator";
import Admin from "./components/Admin/Admin";

const App = () => {
  return (
    <Router>
      <Route exact={true} path="/">
        <NavBar />
        <Jumbo />
        <AboutUs />
        <PurchaseRules />
        <TransactionIMG />
        <Pricing />
        <CamaroIMG />
        <OurCars />
        <ContactIMG />
        <Contact />
        <Footer />
      </Route>
      <Route path="/calc">
        <NavBar />
        <Calculator />
        <Footer />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </Router>
  );
};

export default App;
