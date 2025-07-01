import axios from 'axios';

export const axiosServer = axios.create({
  baseURL: process.env.INTERNAL_API_URL,
});
