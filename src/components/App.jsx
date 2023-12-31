import "../styles/App.scss";
import Header from "./Header/Header";
import Loader from "./Loader";
import Footer from "./Footer/Footer";
import Alert from "./ThanksAlert/Alert";
import Form from "./Form/Form";
import Products from "./ProductsLogo/Products";

import ProductInfo from "./ProductInfo/ProductInfo";
import HomePage from "../pages/HomePage";

import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPartners } from "../redux/slices/partnerSlice";

import AOS from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";
import Context from "../hooks/useContext";

window.onload = function () {
  document.body.classList.remove("loaded");
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};

function App() {
  const { t, i18n } = useTranslation();
  const partners = useSelector((state) => state.partner);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPartners());
    AOS.init();
  }, [dispatch]);
  return (
    <Context.Provider value={t}>
      <div className="App">
        <Loader />
        <Alert />
        <Form />
        <Header t={t} i18n={i18n} />
        <Routes>
          <Route path="/" element={<HomePage i18n={i18n} />} />
          <Route path="/products" element={<ProductInfo />} />
        </Routes>
        <Products title="partners_h" id="partners" images={partners.images} />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
