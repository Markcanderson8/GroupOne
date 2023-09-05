import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./login.module.css";
import constants from "../util/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");

  const fetchUsers = () => {
    fetch(constants.BASE_URL_API + constants.USERS_ENDPOINT)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchUsers();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
          <button className={styles.button} type="submit">
            Login
          </button>
        </div>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
};

export default Login;
