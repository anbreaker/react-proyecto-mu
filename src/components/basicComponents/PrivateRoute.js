import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { uidOnIndexDB } from '../../store/selectors';

const PrivateRoute = props => {
  // redux selector isLogged
  const isLogged = useSelector(uidOnIndexDB);

  return isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};
export default PrivateRoute;
