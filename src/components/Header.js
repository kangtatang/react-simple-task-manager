import React from "react";
import Button from "./Button";
import PropTypes from 'prop-types';

const Header = ({ title, onAdd, showAdd }) => {
  
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

Header.propTypes = {
  title:PropTypes.string,
  onAdd:PropTypes.func,
  showAdd:PropTypes.func,
}

export default Header;
