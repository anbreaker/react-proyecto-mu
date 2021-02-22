import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UnauthorizedPage from '../pages/UnauthorizedPage';
import { isLogged } from '../../store/selectors';

const PrivateRoute = props => {
  // redux selector isLogged
  return useSelector(isLogged) ? <Route {...props} /> : <UnauthorizedPage />;
};
export default PrivateRoute;
