import React from "react";
import PropTypes from "prop-types";
import "./btn_style.css";

export const Btn = ({ className, text, onInput }) => {
  const handleClick = () => {
    const value = prompt(`Enter your ${text}:`);
    if (value !== null) {
      onInput(value); // Pass the value back to the parent component
    }
  };

  return (
    <button
      className={`btn ${className}`}
      onClick={handleClick}
    >
      <div className="frame">
        <div className="enter-your-name">{text}</div>
      </div>
    </button>
  );
};

Btn.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
};
