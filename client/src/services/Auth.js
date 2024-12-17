import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

export const signUpUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signInUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}signin`, credentials);
    return response.data;
  } catch (error) {
    console.error("Sign-in error:", error);
    throw new Error("Failed to sign in");
  }
};
