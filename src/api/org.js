import client from './client';

export const getAllOrgs = async () => {
  return client
    .get('/org/all')
    .then(res => res.data)
    .catch(err => err);
};

export const getOrgsById = async id => {
  return client
    .get('/org/' + id)
    .then(res => res.data)
    .catch(err => err);
};

export const saveOrgDB = async orgData => {
  return client
    .post('/org', orgData)
    .then(res => res.data)
    .catch(err => err);
};
