import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://technical-task-api.icapgroupgmbh.com/',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

// export const signup = async data => {
//   const { data: result } = await instance.post('/users/signup', data);
//   setToken(result.token);
//   return result;
// };

export const login = async data => {
  const { data: result } = await instance.post('/api/login/', data);
console.log(result);
  setToken(result.message);
  return result;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/users/current');

    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post('/api/logout');
  setToken();
  return data;
};

export default instance;
