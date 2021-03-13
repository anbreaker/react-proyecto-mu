import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { Input } from 'reactstrap';

import img from '../../assets/img/undraw_profile_1.svg';
import {
  getPhotoURL,
  getUserName,
  getUserOrgs,
  getUserOrgSel,
} from '../../store/selectors';
import { startLogout, changeOrgAction } from '../../store/actions/auth';
import { setShowSidebar } from '../../store/actions/ui';
import { getSidebarStatus } from '../../store/selectors';

const Topbar = ({ handleInsideClick, handleOutsideClick, showMenu }) => {
  const { t } = useTranslation('global');
  const userName = useSelector(getUserName);
  const orgs = useSelector(getUserOrgs);
  const orgSelected = useSelector(getUserOrgSel);

  console.log({ orgs });

  const dispatch = useDispatch();

  const showSidebar = useSelector(getSidebarStatus);
  const photoURL = useSelector(getPhotoURL);

  const ref = useDetectClickOutside({ onTriggered: handleOutsideClick });

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleSideBarShow = () => {
    dispatch(setShowSidebar(!showSidebar));
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* <!-- Sidebar Toggle (Topbar) --> */}
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
        onClick={handleSideBarShow}
      >
        <i className="fa fa-bars"></i>
      </button>
      <div className="input-group">
        <div className="pr-3 d-sm-none d-md-block">
          <h6 className="font-weight-bold pt-2">
            {t('TopBar.Organization-Selected')}:
          </h6>
        </div>
        <Input
          className="col-4"
          type="select"
          name="organization"
          id="organization"
          value={orgSelected.id}
          //onFocus={handlerOnFocus}
          onChange={event => {
            const { target } = event.nativeEvent;
            const index = target.selectedIndex;
            dispatch(
              changeOrgAction({
                name: target[index].text,
                id: target[index].value,
              })
            );
          }}
        >
          {orgs &&
            orgs.map(org => {
              return (
                <option key={org._id} value={org._id}>
                  {org.name}
                </option>
              );
            })}
        </Input>
      </div>
      <ul className="navbar-nav ml-auto">
        <div className="topbar-divider d-none d-sm-block"></div>

        {/* <!-- Nav Item - User Information --> */}
        <li
          className={clsx('nav-item dropdown no-arrow', showMenu && 'show')}
          ref={ref}
        >
          <div
            className="nav-link dropdown-toggle"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={showMenu}
            onClick={handleInsideClick}
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              {userName}
            </span>
            <img
              className="img-profile rounded-circle"
              alt=""
              src={photoURL ? photoURL : img}
            />
          </div>

          {/* <!-- Dropdown - User Information --> */}
          <div
            className={clsx(
              'dropdown-menu dropdown-menu-right shadow animated--grow-in',
              showMenu && 'show'
            )}
            aria-labelledby="userDropdown"
          >
            <Link className="dropdown-item" to="/profile">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              {t('NavBars.Profile')}
            </Link>
            <Link className="dropdown-item" to="/settings">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              {t('NavBars.Settings')}
            </Link>
            <div className="dropdown-divider"></div>
            <div
              className="dropdown-item"
              data-toggle="modal"
              data-target="#logoutModal"
              role="button"
              onClick={handleLogout}
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              {t('NavBars.Logout')}
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
