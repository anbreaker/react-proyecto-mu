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

export const removeOrgsById = async id => {
  return client
    .delete('/org/' + id)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => err);
};

export const saveOrgDB = async orgData => {
  console.log(orgData, '<-- orgData');

  return client
    .post('/org', orgData)
    .then(res => res.data)
    .catch(err => err);
};

// TODO crear para actualizar en Backend
export const updateOrgDB = async orgData => {
  console.log(orgData, '<-- orgData');

  return client
    .put('/org', orgData)
    .then(res => res.data)
    .catch(err => err);
};
