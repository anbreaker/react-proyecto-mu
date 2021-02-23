import React, { useState } from 'react';

import { TalentMuFooter } from './TalentMuFooter';
import Topbar from '../layout/Topbar';
import Sidebar from './Sidebar/Sidebar';

const MainLayout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOutsideClick = () => {
    setShowMenu(false);
  };

  const handleInsideClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar
            handleOutsideClick={handleOutsideClick}
            handleInsideClick={handleInsideClick}
            showMenu={showMenu}
          />

          {children}
        </div>

        <TalentMuFooter />
      </div>
    </div>
  );
};

export default MainLayout;
