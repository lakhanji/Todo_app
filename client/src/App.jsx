import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoPage from "./pages/TodoPage";
import TaskListPage from "./pages/TaskListPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Header />

      <Routes>

      <Route path="/" element={<Navigate to="/Home" replace />} />
      
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/signin"
          element={<SignIn onSignIn={handleSignIn} />}
        />
        <Route
          path="/add-list"
          element={
            isAuthenticated ? (
              <TodoPage
                tasks={tasks}
                setTasks={setTasks}
                editingTask={editingTask}
                setEditingTask={setEditingTask}
              />
            ) : (
              <Navigate to="/signin" replace />
            )
          }
        />
        <Route
          path="/tasks"
          element={
            isAuthenticated ? (
              <TaskListPage
                tasks={tasks}
                setTasks={setTasks}
                onEdit={setEditingTask}
              />
            ) : (
              <Navigate to="/signin" replace />
            )
          }
        />

      </Routes>
      
    </Router>
  );
};

export default App;
