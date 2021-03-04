import axios from 'axios';

const { REACT_APP_NODE: host, REACT_APP_API_VERSION: version } = process.env;

const baseURL = `${host}/${version}`;

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
    console.log(auth);
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

// TODO Comprobar Interceptor no recoge bien los Errores
// // Intercepts response
// client.interceptors.response.use(
//   ({ data: { ok, ...result } }) => {
//     if (!ok) {
//       return Promise.reject(result.error);
//     }
//     return Promise.resolve(result);
//   },
//   error => {
//     if (error.response) {
//       return Promise.reject(error.response.data.error);
//     }
//     return Promise.reject(error);
//   }
// );

// Configure client
export const configureClient = (token, orgId) => {
  if (token) setAuthorizationHeader(token);
  if (orgId) setHeaderOrgId(orgId);
};

export default client;
