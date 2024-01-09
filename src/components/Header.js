import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  //   const handleOnCLick = () => {
  //     alert("button clicked");
  //   };
  return (
    <div className="my-header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        title={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </div>
  );
};

Header.defaultProps = {
  title: "My Task",
};

export default Header;
