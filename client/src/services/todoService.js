import axios from "axios";

const API_URL = "http://localhost:5000/api/todos/";

// Fetch all tasks
export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new task
export const addTodo = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

// Update a task
export const updateTodo = async (id, updates) => {
  const response = await axios.put(`${API_URL}${id}`, updates);
  return response.data;
};

// Delete a task
export const deleteTodo = async (id) => {
  const response = await axios.delete(`${API_URL}${id}`);
  return response.data;
};

