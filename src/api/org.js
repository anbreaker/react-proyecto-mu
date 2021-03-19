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

export const getOrgFeesPerYear = async year => {
  return client
    .get('/org/fee?year=' + year)
    .then(res => res.data)
    .catch(err => err);
};

export const setFeeToOrg = async feeData => {
  return client
    .post('/org/fee', feeData)
    .then(res => res.data)
    .catch(err => err);
};

export const deleteFee = async feeData => {
  console.log(feeData);
  return client
    .delete('/org/fee', { data: feeData })
    .then(res => res.data)
    .catch(err => err);
};
