import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import constants from "../util/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        setIsLoggedIn(true);
        navigate("/", { loggedIn: isLoggedIn });
      } else {
        setError(true);
        console.log("error");
      }
    }
  };
  const getApiData = async () => {
    const response = await fetch(
      constants.BASE_URL_API + constants.USERS_ENDPOINT
    ).then((response) => response.json());

    setUsers(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.text}>Login</div>
          <div className={styles.underline}></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.input}>
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.submitContainer}>
            <button className={styles.button}>Login</button>
          </div>
          <div>
            {error ? (
              <p className={styles.error}>Email or Password invalid</p>
            ) : null}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
