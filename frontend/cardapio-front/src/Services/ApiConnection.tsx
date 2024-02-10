import axios from 'axios';

export const ApiConnection = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
});