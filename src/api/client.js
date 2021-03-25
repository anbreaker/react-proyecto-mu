import axios from 'axios';

//const { REACT_APP_NODE: host, REACT_APP_API_VERSION: version } = process.env;

const baseURL =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_DEV_NODE + process.env.REACT_APP_DEV_API_VERSION
    : process.env.REACT_APP_PROD_NODE + process.env.REACT_APP_PROD_API_VERSION;

//const baseURL = `${host}/${version}`;

// Create axios instance
const client = axios.create({
  baseURL,
});

const setAuthorizationHeader = token => {
  client.defaults.headers.common['Authorization'] = token;
};

export const setHeaderOrgId = orgId => {
  client.defaults.headers.common['X-orgId'] = orgId;
};

const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common['Authorization'];
};

export const removeHeaderOrgId = () => {
  delete client.defaults.headers.common['X-orgId'];
};

// Login method
client.login = credentials =>
  client.post('/auth/login', credentials).then(auth => {
    console.log(auth, '<-- auth');
    setAuthorizationHeader(auth.token);
    return auth;
  });

// Configure client
export const configureClient = token => {
  if (token) setAuthorizationHeader(token);
};

// Logout method
client.logout = () =>
  new Promise(resolve => {
    // Remove Authorization header
    removeAuthorizationHeader();
    resolve();
  });

// Intercepts response
client.interceptors.response.use(
  ({ data }) => {
    if (!data) {
      return Promise.reject('Empty response - Interceptor');
    }
    //    console.log(data);
    return Promise.resolve(data);
  },
  error => {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

//Send email
client.senderMail = formValues => {
  return client.post('/sender', formValues);
};

//Send email
client.senderMailInvoiceMail = params => {
  return client.post('/sender/treasurer-income', params);
};

export default client;
