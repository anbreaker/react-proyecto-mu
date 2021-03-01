import axios from 'axios';

const { REACT_APP_NODE: host, REACT_APP_API_VERSION: version } = process.env;

const baseURL = `${host}/${version}`;

// Create axios instance
const client = axios.create({
  baseURL,
});

const setEmailHeader = email => {
  client.defaults.headers.common.email = email;
};

const removeEmailHeader = () => {
  delete client.defaults.headers.common.email;
};

const setAuthorizationHeader = token => {
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common['Authorization'];
};

// Login method
client.login = credentials =>
  client.post('/auth/login', credentials).then(auth => {
    console.log(auth)
    setAuthorizationHeader(auth.token);
    return auth;
  });

// Logout method
client.logout = () =>
  new Promise(resolve => {
    // Remove Authorization header
    removeAuthorizationHeader();
    resolve();
  });

// Intercepts response
client.interceptors.response.use(
  ({ data: { ok, ...result } }) => {
    if (!ok) {
      return Promise.reject(result.error);
    }
    return Promise.resolve(result);
  },
  error => {
    if (error.response) {
      return Promise.reject(error.response.data.error);
    }
    return Promise.reject(error);
  }
);

// Configure client
export const configureClient = (token, email) => {
  if (token) {
    setAuthorizationHeader(token);
  }

  if (email) {
    setEmailHeader(email)
  }
};

export default client;
