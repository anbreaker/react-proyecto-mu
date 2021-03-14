import client from './client';

export const getAllOrgs = async () => {
  return client
    .get('/org/all')
    .then(res => res.data)
    .catch(err => err);
};

export const getOrgById = async id => {
  return client
    .get(`/org/${id || ''}`)
    .then(res => res.data)
    .catch(err => err);
};

export const getMyOrg = async () => {
  return client
    .get('/org')
    .then(res => res.data)
    .catch(err => err);
};

export const removeOrgsById = async id => {
  return client
    .delete('/org/' + id)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => err);
};

export const saveOrgDB = async orgData => {
  return client
    .post('/org', orgData)
    .then(res => res.data)
    .catch(err => err);
};

export const getUsersMyOrg = async () => {
  return client
    .get('/org/users')
    .then(res => res.data)
    .catch(err => err);
};
