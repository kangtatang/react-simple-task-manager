import React from "react";

const Button = ({ color, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="my-btn"
      style={{ backgroundColor: color }}
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  title: "Add",
};

export default Button;
