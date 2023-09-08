import "./App.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home"
import styles from "./App.module.css";
import ItemCard from "../item-card/ItemCard";
import ProductPage from "./productPage/ProductPage";

function App() {
  let itemName = "Cheese";
  let itemPrice = "5.99";
  let itemSize = "2L";
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route
          exact
          path="/card"
          element={
            <ItemCard
              itemName={itemName}
              itemPrice={itemPrice}
              itemSize={itemSize}
            />
          }
        />
        <Route exact path="/products" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
