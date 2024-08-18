// Componente Button.jsx que criei com a ideia de reutilizar em outros lugares que haviam botões

import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, onClick, type, variant }) => {
  const buttonClasses = `${styles.button} ${styles[variant]}`;

  return (
    <button className={buttonClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
