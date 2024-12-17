
import { useState, useEffect } from "react";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchTodos, updateTodo, deleteTodo } from "../services/todoService";
import './TaskListPage.css';

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [operationLoading, setOperationLoading] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchTodos();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  const handleToggleComplete = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task._id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = async (taskId) => {
    try {
      setOperationLoading(true);
      await deleteTodo(taskId);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      setOperationLoading(false);
    }
  };

  const handleUpdateTask = async (taskId, updates) => {
    try {
      setOperationLoading(true);
      const updatedTask = await updateTodo(taskId, updates);
      setTasks(tasks.map((task) => (task._id === taskId ? updatedTask : task)));
      setEditingTask(null);
    } catch (error) {
      console.error("Error updating task:", error);
    } finally {
      setOperationLoading(false);
    }
  };

  return (
    <div className="container">
      {editingTask ? (
        <TaskForm
          initialData={editingTask}
          onAddTask={(updates) => handleUpdateTask(editingTask._id, updates)}
          onCancel={() => setEditingTask(null)}
        />
      ) : (
        <>
          {loading ? (
            <div className="loading-spinner-container">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <TaskItem
                    key={task._id}
                    task={task}
                    onToggleComplete={handleToggleComplete}
                    onDelete={handleDeleteTask}
                    onEdit={() => setEditingTask(task)}
                  />
                ))
              ) : (
                <p className="text-gray-500 text-center">No tasks available.</p>
              )}
            </div>
          )}

          {operationLoading && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
              <LoadingSpinner />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TaskListPage;
