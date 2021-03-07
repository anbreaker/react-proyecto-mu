import client from './client';

export const getAllOrgs = async () => {};

export const saveOrgDB = async orgData => {
  return client
    .post('/org', orgData)
    .then(res => res.data)
    .catch(err => err);
};
