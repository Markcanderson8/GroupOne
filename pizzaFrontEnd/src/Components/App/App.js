import "./App.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
