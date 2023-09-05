import "./App.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import styles from "./App.module.css";
import ProductPage from "../productPage/ProductPage";
import SingleProductPage from "../productPage/SingleProductPage";
import Register from "../register/Register";
import Login from "../login/Login";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<ProductPage />} />
        <Route exact path="/products/:id" element={<SingleProductPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
