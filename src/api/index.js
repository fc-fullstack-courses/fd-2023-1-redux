import axios from "axios";

const httpClient = axios.create({
  baseURL: 'http://localhost:5000'
});

export const createUser = async (userData) => {

  const response = await httpClient.post('/users', userData);
  return response;
}