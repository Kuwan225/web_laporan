import "./scss/button.scss";
import React from "react";

const Button = (props) => {
  return (
    <div className="container-button">
      <button
        className={props.class}
        onClick={props.click}
        disabled={props.disabled || false}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
