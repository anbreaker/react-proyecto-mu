import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { uidOnIndexDB, userStatus } from '../../store/selectors';

export const PrivateRoute = props => {
  // redux selector isLogged
  const isLogged = useSelector(uidOnIndexDB);
  const uStatus = useSelector(userStatus);

  const checkStatus = () => {
    //console.log(`islogged: ${isLogged} - uStatus: ${uStatus}`);
    if (!isLogged) return <Redirect to="/login" />;

    if (uStatus === 'NotRegistered')
      return props.path === '/profile' ? (
        <Route {...props} />
      ) : (
        <Redirect to="/profile" />
      );

    if (uStatus === 'Disabled') return <Redirect to="/disabled" />;

    if (uStatus === 'Enabled') return <Route {...props} />;

    return <Redirect to="/login" />;
  };

  return checkStatus();
};
