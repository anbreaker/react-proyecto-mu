import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getOrgById } from '../../api';
import {
  finishLoadingAction,
  removeErrorAction,
  setErrorAction,
  startLoadingAction,
} from '../../store/actions/ui';
import { getUserOrgSel } from '../../store/selectors';

export const CardsProfile = () => {
  const { t } = useTranslation('global');

  const [currentOrg, setCurrentOrg] = useState({});

  const dispatch = useDispatch();

  const currentUser = useSelector(getUserOrgSel);

  useEffect(() => {
    dispatch(startLoadingAction());
    dispatch(removeErrorAction());

    getOrgById(currentUser.id)
      .then(data => {
        dispatch(finishLoadingAction());
        setCurrentOrg(data);
      })
      .catch(err => {
        console.log(err);
        dispatch(setErrorAction('Error al cargar la información del usuario'));
      });
  }, [currentUser.id]);

  console.log(currentOrg);

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
            <div className="col">
              <div className="row">
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3">
                    {t('Dashboard.Name')}:
                  </h6>
                  <p>{currentUser.name}</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3">
                    {t('Dashboard.Foundation')}:
                  </h6>
                  <p>{currentUser.foundationDate}</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3">
                    {t('Dashboard.Country')}:
                  </h6>
                  <p>{currentUser.name}</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3">
                    {t('Dashboard.Country')}:
                  </h6>
                  <p>{currentUser.name}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3">
                    {t('Dashboard.Province')}:
                  </h6>
                  <p>{currentUser.province}</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3">
                    {t('Dashboard.City')}:
                  </h6>
                  <p>{currentUser.city}</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3">
                    {t('Dashboard.Address')}:
                  </h6>
                  <p>{currentUser.address}</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3">
                    {t('Dashboard.President')}:
                  </h6>
                  <p>{currentUser.president}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
