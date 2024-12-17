import TaskForm from "../components/TaskForm";
import LoadingSpinner from "../components/LoadingSpinner";
import { useState } from "react";
import { addTodo } from "../services/todoService";
import { useNavigate } from "react-router-dom";
import './TodoPage.css'; 

const TodoPage = ({ tasks, setTasks }) => {
  const [operationLoading, setOperationLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddTask = async (task) => {
    try {
      setOperationLoading(true);
      const newTask = await addTodo(task);
      setTasks([...tasks, newTask]);
      navigate("/tasks"); 
    } catch (error) {
      console.error("Error adding task:", error);
    } finally {
      setOperationLoading(false);
    }
  };

  return (
    <div className="todo-page-container">
      <TaskForm onAddTask={handleAddTask} />
      {operationLoading && (
        <div className="todo-page-overlay">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default TodoPage;
