import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ChangeLanguaje } from '../utils/ChangeLanguaje';
import lost from '../../assets/img/401-error.svg';

//Borrar al No ser Necesaria... (facilidad a la hora de trabajar...)
import { NavbarForDevOnly } from '../utils/NavbarForDevOnly';

export const UnauthorizedPage = () => {
  const { t } = useTranslation('global');

  return (
    <>
      {/* Borrar al No ser Necesaria... (facilidad a la hora de trabajar...) */}
      <NavbarForDevOnly />

      <div className="container pt-5">
        <div id="content-wrapper" className="mt-xl-5 d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            <div className="container-fluid">
              {/* <!-- 401 Error Text --> */}
              <div className="text-center mt-xl-5">
                <div className="error mx-auto" data-text="401">
                  401
                </div>
                <p className="lead text-gray-800 mb-5">
                  {t('UnauthorizedPage.Unauthorized')}
                </p>
                <p className="text-gray-500 mb-0">
                  {t('UnauthorizedPage.Message')}
                </p>

                <Link to="/login">&larr; {t('NotFoundPage.Go-Back')}</Link>
              </div>
            </div>

            {/* <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>{t('NotFoundPage.Made-With')}</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}
          </div>
          <ChangeLanguaje />
        </div>
      </div>
    </>
  );
};

export default UnauthorizedPage;
