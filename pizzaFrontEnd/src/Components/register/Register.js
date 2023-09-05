import React, { useState } from "react";
import styles from "./register.module.css";
import constants, { USERS_ENDPOINT } from "../util/constants";

const LoginSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(constants.BASE_URL_API + USERS_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      // let resJson = await res.json();
      if (res.status === 201) {
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setEmail("");
        setPassword("");
        setMessage("User Created Successfully!!!");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>Sign Up</div>
        <div className={styles.underline}></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <input
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <input
              type="text"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <input
              type="text"
              value={phoneNumber}
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
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
            Register
          </button>
        </div>
        <div className={styles.message}>
          {message ? <p>{message}</p> : null}
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
