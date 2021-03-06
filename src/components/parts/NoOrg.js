import React from 'react';
import { useTranslation } from 'react-i18next';

export const NoOrg = ({ inCard }) => {
  const { t } = useTranslation('global');

  return (
    <>
      {inCard ? (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              {t('NoOrg.Data-Org')}
            </h6>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <p>{t('NoOrg.Title')}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-12">
          <p>{t('NoOrg.Title')}</p>
        </div>
      )}
    </>
  );
};
