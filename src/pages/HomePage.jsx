import Welcome from "../components/Welcome/Welcome";
import Sale from "../components/Sale/Sale";
import Services from "../components/Services/Services";
import Products from "../components/ProductsLogo/Products";
import Order from "../components/OrderProcedure/Order";
import Faq from "../components/FAQ/Faq";
import CalcBlock from "../components/CalculatorBlock/CalcBlock";

const HomePage = () => {
  return (
    <div className="opacity-components">
      <Welcome />
      <Sale />
      <Services />
      <Products title="ПРОДУКЦІЯ, ЯКУ МИ ВИКОРИСТОВУЄМО" id="products" />
      <Order />
      <Faq />
      <CalcBlock />
    </div>
  );
};
export default HomePage;
