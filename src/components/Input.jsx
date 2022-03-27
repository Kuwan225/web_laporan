import "./scss/input.scss";
import React from "react";

const Input = ({ place, type, name, register }) => {
  return (
    <div className="container-input">
      <input
        {...register}
        type={type || "text"}
        placeholder={place || "input"}
        name={name}
      />
    </div>
  );
};

export default Input;
