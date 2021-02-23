import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';

import img from '../../assets/img/undraw_profile_1.svg';
import { getUserName, getMenuUserStatus } from '../../store/selectors';
import { startLogout } from '../../store/actions/auth';
import { menuUserToggle, setShowSidebar } from '../../store/actions/ui';
import { getSidebarStatus } from '../../store/selectors';

const Topbar = ({ handleInsideClick, handleOutsideClick, showMenu }) => {
  const { t } = useTranslation('global');
  const userName = useSelector(getUserName);

  const showSidebar = useSelector(getSidebarStatus);
  const dispatch = useDispatch();
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

      {/* <!-- Topbar Search --> */}
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Search for..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form>

      {/* <!-- Topbar Navbar --> */}
      <ul className="navbar-nav ml-auto">
        {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a
            className="nav-link dropdown-toggle"
            href="/s"
            id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-search fa-fw"></i>
          </a>
          {/* <!-- Dropdown - Messages --> */}
          <div
            className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown"
          >
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

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
            <img className="img-profile rounded-circle" alt="" src={img} />
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
