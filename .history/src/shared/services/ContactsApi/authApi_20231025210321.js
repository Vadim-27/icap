import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://technical-task-api.icapgroupgmbh.com/',
});

// const setToken = token => {
//   console.log('token', token);
//   if (token) {
//     // return (instance.defaults.headers.authorization = `Bearer ${token}`);
//     return token;
//   }
//   instance.defaults.headers.authorization = '';
// };

// export const signup = async data => {
//   const { data: result } = await instance.post('/users/signup', data);
//   setToken(result.token);
//   return result;
// };

export const login = async data => {
  const { data: result } = await instance.post('/api/login/', data);
// console.log('result', result);
//   setToken(result.message);
  return result;
};



export const logout = async () => {
  const { data } = await instance.post('/api/logout');

  return data;
};

export default instance;
