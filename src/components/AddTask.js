import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if(!text){
        alert('Task Can not be empty!')
        return
    }

    onAdd({text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
  };
  return (
    <form
      onSubmit={onSubmit}
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        marginBottom: "20px",
      }}
    >
      <div className="mb-3">
        <label htmlFor="task" className="form-label text-start">
          Task
        </label>
        <input
          type="text"
          className="form-control"
          id="task"
          aria-describedby="taskHelp"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="day" className="form-label text-start">
          Day And Time
        </label>
        <input
          type="text"
          className="form-control"
          id="day"
          aria-describedby="taskHelp"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="reminder"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
        <label className="form-check-label" htmlFor="reminder">
          Reminder
        </label>
      </div>
      <div className="d-grid gap-2 mt-3">
        <input className="btn btn-success" type="submit" value="Save" />
      </div>
    </form>
  );
};

export default AddTask;
