import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { uidOnIndexDB, userStatus } from '../../store/selectors';

/*const PrivateRoute = props => {
  // redux selector isLogged
  const isLogged = useSelector(uidOnIndexDB);

  return isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};*/

const PrivateRoute = props => {
  // redux selector isLogged
  const isLogged = useSelector(uidOnIndexDB);
  const uStatus = useSelector(userStatus);

  const checkStatus = () => {
    console.log(uStatus);
    if (isLogged && uStatus === 'NotRegistered')
      return props.path === '/profile' ? (
        <Route {...props} />
      ) : (
        <Redirect to="/profile" />
      );

    if (isLogged && uStatus === 'Disabled') return <Redirect to="/Login" />;

    if (isLogged && uStatus === 'Enabled') return <Route {...props} />;

    return <Redirect to="/Login" />;
  };

  return checkStatus();
};

export default PrivateRoute;
