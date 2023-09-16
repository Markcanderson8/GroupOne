import "./App.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../home/Home";
import styles from "./App.module.css";
import ProductPage from "../productPage/ProductPage";
import SingleProductPage from "../productPage/SingleProductPage";
import Register from "../register/Register";
import Login from "../login/Login";
import AddItemsForm from "../addItems/AddItemsForm";
import ProtectedRoutes from "../authorization/ProtectedRoutes";
import { useAppContext } from "../../context/AuthProvider";
import Cart from "../cartPage/Cart";
import Contact from "../contactPage/Contact";
import MessageSent from "../messageSentPage/MessageSent";
import AdminPage from "../adminPage/AdminPage";
import PageNotFound from "../pageNotFound/PageNotFound";
import AboutPage from "../aboutPage/AboutPage";
import Cancel from "../cartPage/Cancel";
import Success from "../cartPage/Success";
import { useEffect, useState } from "react";

function App() {
  const { isLoggedIn } = useAppContext();
  const { role } = useAppContext();

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  useEffect(() => {
    console.log("cart changed");
  }, [cart]);

  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/contact-us" element={<Contact />} />
        <Route exact path="/message-sent" element={<MessageSent />} />
        <Route exact path="/about-us" element={<AboutPage />} />
        <Route
          element={<ProtectedRoutes isLoggedIn={isLoggedIn} role={role} />}
        >
          <Route
            exact
            path="/products"
            element={<ProductPage handleClick={handleClick} />}
          />
          <Route
            exact
            path="/products/:id"
            element={<SingleProductPage handleClick={handleClick} />}
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            }
          />
          <Route exact path="/cancel" element={<Cancel />} />
          <Route exact path="/success" element={<Success />} />
        </Route>
        <Route
          element={<ProtectedRoutes isLoggedIn={isLoggedIn} role={!role} />}
        >
          <Route exact path="/adminPage" element={<AdminPage />} />
          <Route exact path="/adminPage/addItems" element={<AddItemsForm />} />
        </Route>
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
