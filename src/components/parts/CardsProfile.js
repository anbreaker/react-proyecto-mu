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
import { formatToLocaleDate } from '../utils/dateFormat';

export const CardsProfile = () => {
  const { t } = useTranslation('global');

  const [org, setOrg] = useState({});

  const dispatch = useDispatch();

  const currentOrg = useSelector(getUserOrgSel);

  useEffect(() => {
    dispatch(startLoadingAction());
    dispatch(removeErrorAction());

    getOrgById(currentOrg.id)
      .then(data => {
        dispatch(finishLoadingAction());
        setOrg(data);
      })
      .catch(err => {
        console.log(err);
        dispatch(setErrorAction('Error al cargar la información del usuario'));
      });
  }, [currentOrg.id]);

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
                  <h6 className="font-weight-bold mt-3 text-info">
                    {t('CardsProfile.Name')}:
                  </h6>
                  <p>{org.name}</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3 text-info">
                    {t('CardsProfile.Foundation')}:
                  </h6>
                  <p>{formatToLocaleDate(org.foundationDate)}</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3 text-info">
                    {t('CardsProfile.Country')}:
                  </h6>
                  <p>{org.country}</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3 text-info">
                    {t('CardsProfile.Province')}:
                  </h6>
                  <p>{org.province}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3 text-info">
                    {t('CardsProfile.City')}:
                  </h6>
                  <p>{org.city}</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3 text-info">
                    {t('CardsProfile.Address')}:
                  </h6>
                  <p>{org.address}</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3 text-info">
                    {t('CardsProfile.Treasurer')}:
                  </h6>
                  <p>{org.treasurer}</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3 text-info">
                    {t('CardsProfile.President')}:
                  </h6>
                  <p>{org.president}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
