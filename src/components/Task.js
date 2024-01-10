import React from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`my-task ${task.reminder ? "my-reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className="my-task-heading">
        <h3>{task.text}</h3>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </div>
      <p>{task.day}</p>
    </div>
  );
};

Task.propTypes = {
  task:PropTypes.array,
  onDelete:PropTypes.func,
  onToggle:PropTypes.func,
}

export default Task;
