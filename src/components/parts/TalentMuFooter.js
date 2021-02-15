import React from 'react';
import { ChangeLanguaje } from '../utils/ChangeLanguaje';
import { useTranslation } from 'react-i18next';

export const TalentMuFooter = () => {
  const { t } = useTranslation('global');

  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>{t('NotFoundPage.Made-With')}</span>
          </div>
        </div>
        <ChangeLanguaje />
      </footer>
      {/* <!-- End of Footer --> */}
    </>
  );
};
