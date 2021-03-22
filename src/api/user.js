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

export const getAllUsers = async orgId => {
  const ruta = `/user/all${orgId ? `/${orgId}` : ''}`;
  return client
    .get(ruta)
    .then(res => res.data)
    .catch(err => err);
};

export const getSingleUser = async userId => {
  return client
    .get(`/user?userId=${userId}`)
    .then(res => res.data)
    .catch(err => err);
};
