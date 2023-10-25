

import instance from './authApi';

export const getAllContacts = async () => {
  const { data } = await instance.get('api/table/');

  return data;
};


export const editContacts = async data => {
  const { id, ...restData } = data;
  const { data: result } = await instance.patch(api/table/${id}, restData);
  return result;
};

export const deleteContacts = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
