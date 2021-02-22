import React from 'react';
import { useTranslation } from 'react-i18next';
import { ClickAwayListener } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { TalentMuFooter } from './TalentMuFooter';
import Topbar from '../layout/Topbar';
import Sidebar from '../layout/Sidebar';
import { menuUserToggle } from '../../store/actions/ui';
import { getMenuUserStatus } from '../../store/selectors';

const MainLayout = ({ children }) => {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();
  const menuOpen = useSelector(getMenuUserStatus);

  const handleMenuUserClick = () => {
    if (menuOpen) {
      dispatch(menuUserToggle(false));
    }
  };
  return (
    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />

          <ClickAwayListener onClickAway={handleMenuUserClick}>
            {children}
          </ClickAwayListener>
        </div>

        <TalentMuFooter />
      </div>
    </div>
  );
};

export default MainLayout;
