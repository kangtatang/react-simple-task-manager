import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTask from "./components/AddTask";
import Swal from 'sweetalert';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Class Appointment",
      day: "Jan 5th 2024 at 2:30 pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting with Team",
      day: "Jan 7th 2024 at 10:00 am",
      reminder: false,
    },
    {
      id: 3,
      text: "Project Deadline",
      day: "Jan 10th 2024 at 5:00 pm",
      reminder: true,
    },
    {
      id: 4,
      text: "Gym Session",
      day: "Jan 12th 2024 at 6:30 am",
      reminder: true,
    },
    {
      id: 5,
      text: "Lunch with Friends",
      day: "Jan 15th 2024 at 12:00 pm",
      reminder: false,
    },
    {
      id: 6,
      text: "Read a Book",
      day: "Jan 18th 2024 at 8:00 pm",
      reminder: false,
    },
    {
      id: 7,
      text: "Coding Practice",
      day: "Jan 20th 2024 at 3:00 pm",
      reminder: true,
    },
    {
      id: 8,
      text: "Family Dinner",
      day: "Jan 22nd 2024 at 7:00 pm",
      reminder: false,
    },
    {
      id: 9,
      text: "Movie Night",
      day: "Jan 25th 2024 at 9:00 pm",
      reminder: true,
    },
    {
      id: 10,
      text: "Weekend Hike",
      day: "Jan 28th 2024 at 10:30 am",
      reminder: true,
    },
  ]);

  const showDelete = (words) => {
    Swal({
      title: "Deleted",
      text: words,
      icon: "warning",
      dangerMode: false,
      buttons: {
        ok: "OK"
      },
    })
  };

  const showToggle = (words) => {
    Swal({
      title: "Success",
      text: words,
      icon: "success",
      dangerMode: false,
      buttons: {
        ok: "OK"
      },
    })
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    // alert(`delete  ${id}`)
    setTasks(tasks.filter((task) => task.id !== id));
    showDelete('Data berhasil dihapus!')
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );

    showToggle('Reminder Set')
  };
  return (
    <div className="App">
      <div className="my-container">
        <Header
          title="My React Task"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No Task To Show"
        )}
      </div>
    </div>
  );
}

export default App;
