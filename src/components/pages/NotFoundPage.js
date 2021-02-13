import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ChangeLanguaje } from '../utils/ChangeLanguaje';

export const NotFoundPage = () => {
  const { t } = useTranslation('global');

  return (
    <>
      <div id="content-wrapper" className="mt-xl-5 d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <div className="container-fluid">
            {/* <!-- 404 Error Text --> */}
            <div className="text-center mt-xl-5">
              <div className="error mx-auto" data-text="404">
                404
              </div>
              <p className="lead text-gray-800 mb-5">
                {t('NotFoundPage.Not-Found')}
              </p>
              <p className="text-gray-500 mb-0">{t('NotFoundPage.Matrix')}</p>

              <Link to="/">&larr; {t('NotFoundPage.Go-Back')}</Link>
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
    </>
  );
};
