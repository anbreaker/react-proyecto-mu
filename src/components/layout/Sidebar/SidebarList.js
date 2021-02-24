import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { getPermisos } from '../../../store/selectors';

const SidebarList = ({ showSidebar }) => {
  const { t } = useTranslation('global');
  const permisos = useSelector(getPermisos);
  const [menuExpanded, setMenuExpanded] = useState('');
  const [navItems, setNavItems] = useState(null);

  const handleMenuClick = e => {
    if (menuExpanded === e.target.id) return setMenuExpanded('');
    setMenuExpanded(e.target.id);
  };

  useEffect(() => {
    return setMenuExpanded('');
  }, [showSidebar]);

  // TODO map is undefined al cerrar sesion...
  useEffect(() => {
    const elementos = permisos.map(m => {
      return m.submenu.length > 0 ? (
        <li className="nav-item" key={m.menu}>
          <div
            className={clsx('nav-link', menuExpanded !== m.menu && 'collapsed')}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded={menuExpanded === m.menu}
            aria-controls="collapseTwo"
            role="button"
            id={m.menu}
            onClick={handleMenuClick}
          >
            <i id={m.menu} className={clsx('fas fa-fw', m.icon)}></i>
            <span id={m.menu}>{t(`NavBars.${m.menu}`)}</span>
          </div>
          <div
            id="collapseTwo"
            className={clsx('collapse', menuExpanded === m.menu && 'show')}
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">{m.menu}</h6>
              {m.submenu &&
                m.submenu.map(s => (
                  <Link className="collapse-item" key={s.name} to={s.route}>
                    {t(`NavBars.${s.name}`)}
                  </Link>
                ))}
            </div>
          </div>
        </li>
      ) : (
        <li className="nav-item d-none" key={m.menu}></li>
      );
    });
    setNavItems(elementos);
  }, [permisos, menuExpanded, t]);

  return <>{navItems}</>;
};

export default SidebarList;
