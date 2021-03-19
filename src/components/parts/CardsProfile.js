import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';

import { getUiState, getUserOrgSel } from '../../store/selectors';
import { formatToLocaleDate } from '../utils/dateFormat';

export const CardsProfile = () => {
  const { t } = useTranslation('global');

  const currentOrg = useSelector(getUserOrgSel);
  const { loading } = useSelector(getUiState);

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            {t('DashboardOrgProfilePage.Data-Org')}
          </h6>
        </div>
        <div className="card-body">
          <div className="row">
            {!loading ? (
              currentOrg._id ? (
                <div className="col">
                  <div className="row">
                    <div className="col-3">
                      <h6 className="font-weight-bold mt-3 text-info">
                        {t('CardsProfile.Name')}:
                      </h6>
                      <p>{currentOrg.name}</p>
                    </div>
                    <div className="col-3">
                      <h6 className="font-weight-bold mt-3 text-info">
                        {t('CardsProfile.Foundation')}:
                      </h6>
                      <p>{formatToLocaleDate(currentOrg.foundationDate)}</p>
                    </div>
                    <div className="col-3">
                      <h6 className="font-weight-bold mt-3 text-info">
                        {t('CardsProfile.Country')}:
                      </h6>
                      <p>{currentOrg.country}</p>
                    </div>
                    <div className="col-3">
                      <h6 className="font-weight-bold mt-3 text-info">
                        {t('CardsProfile.Province')}:
                      </h6>
                      <p>{currentOrg.province}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-3">
                      <h6 className="font-weight-bold mt-3 text-info">
                        {t('CardsProfile.City')}:
                      </h6>
                      <p>{currentOrg.city}</p>
                    </div>
                    <div className="col-3">
                      <h6 className="font-weight-bold mt-3 text-info">
                        {t('CardsProfile.Address')}:
                      </h6>
                      <p>{currentOrg.address}</p>
                    </div>
                    <div className="col-3">
                      <h6 className="font-weight-bold mt-3 text-info">
                        {t('CardsProfile.Treasurer')}:
                      </h6>
                      <p>{currentOrg.treasurer.fullName}</p>
                    </div>
                    <div className="col-3">
                      <h6 className="font-weight-bold mt-3 text-info">
                        {t('CardsProfile.President')}:
                      </h6>
                      <p>{currentOrg.president.fullName}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-12">
                  <p>
                    No tiene organizaciones asignadas a su perfil, por favor
                    contacte a un administrador
                  </p>
                </div>
              )
            ) : (
              <div className="col d-flex justify-content-center">
                <Spinner color="primary" />{' '}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
