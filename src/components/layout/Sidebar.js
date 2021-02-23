import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Collapse } from 'reactstrap';
import Helmet from 'react-helmet';
import clsx from 'clsx';

import useWindowSize from '../../hooks/useWindowSize';
import { getSidebarStatus } from '../../store/selectors';
import { setShowSidebar } from '../../store/actions/ui';

const Sidebar = () => {
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

          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>{t('NavBars.Dashboard')}</span>
            </Link>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

          {/* <!-- Heading --> */}
          <div className="sidebar-heading">{t('NavBars.Interface')}</div>

          {/* <!-- Nav Item - Pages Collapse Menu --> */}

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/s"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="fas fa-fw fa-cog"></i>
              <span>{t('NavBars.Components')}</span>
            </a>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="buttons.html">
                  Buttons
                </a>
                <a className="collapse-item" href="cards.html">
                  Cards
                </a>
              </div>
            </div>
          </li>

          {/* <!-- Nav Item - Utilities Collapse Menu --> */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/s"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              <i className="fas fa-fw fa-wrench"></i>
              <span>Utilities</span>
            </a>
            <div
              id="collapseUtilities"
              className="collapse"
              aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Utilities:</h6>
                <a className="collapse-item" href="utilities-color.html">
                  Colors
                </a>
                <a className="collapse-item" href="utilities-border.html">
                  Borders
                </a>
                <a className="collapse-item" href="utilities-animation.html">
                  Animations
                </a>
                <a className="collapse-item" href="utilities-other.html">
                  Other
                </a>
              </div>
            </div>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

          {/* <!-- Heading --> */}
          <div className="sidebar-heading">Addons</div>

          {/* <!-- Nav Item - Pages Collapse Menu --> */}
          <li className="nav-item active">
            <a
              className="nav-link"
              href="/s"
              data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="true"
              aria-controls="collapsePages"
            >
              <i className="fas fa-fw fa-folder"></i>
              <span>Pages</span>
            </a>
            <div
              id="collapsePages"
              className="collapse show"
              aria-labelledby="headingPages"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Login Screens:</h6>
                <Link className="collapse-item" to="/login">
                  Login
                </Link>
                <Link className="collapse-item" to="/registro">
                  Registro
                </Link>
                <Link className="collapse-item" to="/recuperar-pass">
                  Recuperar Contraseña
                </Link>
                <div className="collapse-divider"></div>
                <h6 className="collapse-header">Other Pages:</h6>
                <Link className="collapse-item" to="/404">
                  404 Page
                </Link>
              </div>
            </div>
          </li>

          {/* <!-- Nav Item - Charts --> */}
          <li className="nav-item">
            <a className="nav-link" href="charts.html">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Charts</span>
            </a>
          </li>

          {/* <!-- Nav Item - Tables --> */}
          <li className="nav-item">
            <a className="nav-link" href="tables.html">
              <i className="fas fa-fw fa-table"></i>
              <span>Tables</span>
            </a>
          </li>

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
