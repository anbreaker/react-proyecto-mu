import client from './client';

export const checkUserDB = async () => {
  const dbUser = await client.get('/user');
  if (dbUser.errorCode === 'NOUSERDATABASE')
    return { active: false, role: 'NotRegistered' };

  return dbUser.data;
};

export const saveUserDB = async () => {};
