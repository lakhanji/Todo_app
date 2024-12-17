import PropTypes from "prop-types";
import "./TaskItem.css";

const TaskItem = ({ task, onToggleComplete, onDelete, onEdit }) => {
  return (
    <div className={`task-item ${task.completed ? "task-completed" : ""}`}>
      {/* Task Title and Description */}
      <div>
        <h3 className={`task-title ${task.completed ? "line-through" : ""}`}>
          {task.title}
        </h3>
        <p className="task-description">{task.description}</p>
      </div>

      {/* Action Buttons */}
      <div className="task-actions">
        {/* Toggle Completion Button */}
        <button
          className={`task-toggle-button ${
            task.completed ? "completed-button" : "incomplete-button"
          }`}
          onClick={() => onToggleComplete(task._id)}
        >
          {task.completed ? "Completed" : "Complete"}
        </button>

        {/* /* Edit Button */ }
        <button className="task-edit-button" onClick={onEdit}>
          Edit
        </button>

        {/* /* Delete Button */ }
        <button className="task-delete-button" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TaskItem;
