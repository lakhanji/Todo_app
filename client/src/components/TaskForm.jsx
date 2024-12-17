
import { useState, useEffect } from "react";
import propTypes from "prop-types";
import "./TaskForm.css";

const TaskForm = ({ onAddTask, initialData, onCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    const newTask = {
      _id: Date.now().toString(),
      title,
      description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
    if (onAddTask) onAddTask(newTask);
  };

  const handleToggleComplete = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task._id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((tasks) => tasks.filter((task) => task._id !== id));
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task._id === id);
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      handleDelete(id);
    }
  };

  return (
    <div className="taskform-container">
      <form className="taskform-form" onSubmit={handleSubmit}>
        <div className="taskform-input-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
          />
        </div>
        <div className="taskform-input-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task description"
          ></textarea>
        </div>
        <div className="taskform-actions">
          <button type="submit" className="primary-button">
            {initialData ? "Update Task" : "Add Task"}
          </button>
          {initialData && (
            <button type="button" className="secondary-button" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="taskform-task-list">
        {tasks.map((task) => (
          <div
            key={task._id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <div className="task-details">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <div className="task-actions">
              <button
                className="complete-button"
                onClick={() => handleToggleComplete(task._id)}
              >
                {task.completed ? "Completed" : "Complete"}
              </button>
              <button
                className="edit-button"
                onClick={() => handleEdit(task._id)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(task._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

TaskForm.propTypes = {
  onAddTask: propTypes.func,
  initialData: propTypes.object,
  onCancel: propTypes.func,
};

export default TaskForm;

