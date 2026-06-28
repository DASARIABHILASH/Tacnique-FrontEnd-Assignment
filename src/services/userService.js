import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Get all users
export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add user
export const addUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

// Update user
export const updateUser = async (id, userData) => {
  const response = await axios.put(`${API_URL}/${id}`, userData);
  return response.data;
};

// Delete user
export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};