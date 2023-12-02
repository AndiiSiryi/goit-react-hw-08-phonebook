import axios from 'axios';

export const privateAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const publicAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});
