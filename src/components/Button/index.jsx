import styles from "./styles.module.scss";

const Button = ({ children, type, mode = "dark", className }) => (
  <button
    type={type}
    className={`${styles.button} ${className} ${
      mode === "dark" ? styles.buttonDark : styles.buttonLight
    }`}
  >
    {children}
  </button>
);

export default Button;
