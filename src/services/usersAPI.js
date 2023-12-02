import { privateAPI, publicAPI } from 'http/http';

export const token = {
  set: token => {
    privateAPI.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unSet: () => {
    privateAPI.defaults.headers.Authorization = '';
  },
};

export const signUpUser = async credentials => {
  const { data } = await publicAPI.post('users/signup', credentials);
  return data;
};

export const logInUser = async credentials => {
  const { data } = await publicAPI.post('users/login', credentials);
  return data;
};

export const logOutUser = async () => {
  return privateAPI.post('users/logout');
};

export const currentUsers = async () => {
  const { data } = await privateAPI.get('users/current');
  return data;
};

export const getContacts = async () => {
  const { data } = await privateAPI.get('contacts');
  return data;
};

export const addContact = async contact => {
  const { data } = await privateAPI.post('contacts', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await privateAPI.delete(`contacts/${id}`);
  return data;
};

export const updateContacts = async id => {
  const { data } = await privateAPI.patch(`contacts/${id}`);
  return data;
};
