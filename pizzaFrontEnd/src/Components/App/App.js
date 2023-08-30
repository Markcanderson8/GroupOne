import styles from "./App.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
