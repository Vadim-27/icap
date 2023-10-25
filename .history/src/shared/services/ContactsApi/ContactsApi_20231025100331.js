

import instance from './authApi';

export const getAllContacts = async () => {
  const { data } = await instance.get('api/table/');

  return data;
};


export const editContacts = async data => {
  const { data: result } = await instance.post('api/table/', data);
  return result;
};

export const deleteContacts = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
