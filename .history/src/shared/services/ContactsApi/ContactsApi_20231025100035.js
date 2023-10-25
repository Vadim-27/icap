

import instance from './authApi';

export const getAllContacts = async () => {
  const { data } = await instance.get('api/table/');

  return data;
};


export const edContacts = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContacts = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
