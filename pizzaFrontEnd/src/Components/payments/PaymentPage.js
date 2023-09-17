import React from "react";
import styles from "./paymentPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [ccNumber, setCCNumber] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [testCCNumber, setTestCCNumber] = useState("2522445585785555");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      ccNumber === "2522445585785555" &&
      month === "12" &&
      year === "2024" &&
      cvv === "222"
    ) {
      navigate("/cart/purchase/success");
    } else {
      navigate("/cart/purchase/cancel");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>Make a Payment</div>
        <div className={styles.underline}></div>
        <div>
          <h5>Test CC Information</h5>
          <h5>CC Number: 2522445585785555</h5>
          <h5>Month: 12 Year: 2024 CVV: 222</h5>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <input
              type="text"
              value={ccNumber}
              placeholder="Credit Card"
              onChange={(e) => setCCNumber(e.target.value)}
              required
            />
          </div>
          <div className={styles.input}>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.input}>
            <input
              type="text"
              value={month}
              placeholder="Month"
              onChange={(e) => setMonth(e.target.value)}
              required
            />
          </div>
          <div className={styles.input}>
            <input
              type="text"
              value={year}
              placeholder="Year"
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          <div className={styles.input}>
            <input
              type="text"
              value={cvv}
              placeholder="CVV"
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={styles.submitContainer}>
          <button className={styles.button} type="submit">
            Purchase
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
