import { useNavigate } from "react-router-dom";
import styles from "./contact.module.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1onj6k6",
        "template_h1a5qoy",
        e.target,
        "rIvi9s72h0o96tBDI"
      )
      .then(
        (result) => {
          console.log(result);
          navigate("/message-sent");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>Contact Us</div>
        <div className={styles.underline}></div>
      </div>
      <form onSubmit={sendEmail}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              //onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              //onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.messageArea}>
            <textarea
              type="textarea"
              name="message"
              placeholder="Message"
              required
              //onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.submitContainer}>
          <button className={styles.button} type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
