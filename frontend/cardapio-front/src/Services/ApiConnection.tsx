import axios from 'axios';

console.log('port' , process.env.REACT_APP_API_URL);
export const ApiConnection = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
});