import client from './client';

export const checkUserDB = async () => {
  const dbUser = await client.get('/user');
  if (dbUser.errorCode === 'NOUSERDATABASE')
    return { active: false, role: 'NotRegistered' };

  return dbUser.data;
};

export const saveUserDB = async userData => {
  return client
    .post('/user', userData)
    .then(res => res.data)
    .catch(err => err);
};

export const getAllUsers = async () => {
  return client
    .get('/user/all')
    .then(res => res.data)
    .catch(err => err);
};
