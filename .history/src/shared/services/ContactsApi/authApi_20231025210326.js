import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://technical-task-api.icapgroupgmbh.com/',
});



export const login = async data => {
  const { data: result } = await instance.post('/api/login/', data);

  return result;
};



export const logout = async () => {
  const { data } = await instance.post('/api/logout');

  return data;
};

export default instance;
