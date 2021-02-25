import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Collapse } from 'reactstrap';
import Helmet from 'react-helmet';
import clsx from 'clsx';

import useWindowSize from '../../../hooks/useWindowSize';
import { getSidebarStatus } from '../../../store/selectors';
import { setShowSidebar } from '../../../store/actions/ui';
import SidebarList from './SidebarList';

const Sidebar = () => {
  // TODO Eliminar cuando se DEBA
  // eslint-disable-next-line
  const { t } = useTranslation('global');

  const [sidebarToggled, setSidebarToggled] = useState(false);
  const { width } = useWindowSize();
  const showSidebar = useSelector(getSidebarStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (width >= 768) {
      return dispatch(setShowSidebar(true));
    }

    return dispatch(setShowSidebar(false));
  }, [width]);

  useEffect(() => {
    if (showSidebar) return setSidebarToggled(false);
    return setSidebarToggled(true);
  }, [showSidebar]);

  return (
    <>
      {/* <!-- Sidebar --> */}
      <Helmet
        bodyAttributes={{
          class: sidebarToggled && 'sidebar-toggled',
        }}
      />
      <Collapse isOpen={showSidebar}>
        <ul
          className={clsx(
            'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion',
            sidebarToggled && 'toggled'
          )}
          id="accordionSidebar"
        >
          {/* <!-- Sidebar - Brand --> */}
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to="/"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">egestion</div>
          </Link>
          {/* <!-- Divider --> */}
          <hr className="sidebar-divider my-0" />

          {/* <!-- Nav Item - Barra de menus --> */}
          <SidebarList showSidebar={showSidebar} />

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider d-none d-md-block" />

          {/* <!-- Sidebar Toggler (Sidebar) --> */}
          <div className="text-center d-none d-md-inline">
            <button
              className="rounded-circle border-0"
              id="sidebarToggle"
              onClick={() => setSidebarToggled(!sidebarToggled)}
            ></button>
          </div>
        </ul>
        {/* <!-- End of Sidebar --> */}
        <hr />
      </Collapse>
    </>
  );
};

export default Sidebar;
