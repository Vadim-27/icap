

import instance from './authApi';

export const getAllContacts = async () => {
  const { data } = await instance.get('api/table/');
  console.log('data', data);
  return data;
};
console.log('data', data);

export const addContacts = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContacts = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
