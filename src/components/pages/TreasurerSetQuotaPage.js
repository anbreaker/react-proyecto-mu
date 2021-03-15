import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Input } from 'reactstrap';
import { Button } from '../basicComponents/Button';
import { Link } from 'react-router-dom';

import { getUiState } from '../../store/selectors';
import { MainLayout } from '../layout/MainLayout';
import { InputText } from '../basicComponents/InputText';

export const TreasurerSetQuotaPage = () => {
  const { t } = useTranslation('global');

  const { loading } = useSelector(getUiState);

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-3 text-gray-800">
          {t('TreasurerSetQuotaPage.Info')}:
        </h1>

        <p className="h5 mb-4">{t('TreasurerSetQuotaPage.Description')}</p>

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4 mt-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              {t('DashboardSuperAdminPage.Organizations')}
            </h6>
          </div>
          <div className="card-body">
            <form>
              <div className="table-responsive">
                <h6 className="m-0 font-weight-bold text-info">
                  {t('TreasurerSetQuotaPage.Select-Year')}
                </h6>
                <Input
                  type="select"
                  name="president"
                  id="president"
                  // value={president}
                  // onFocus={handlerOnFocus}
                  // onChange={handleInputChange}
                  required
                >
                  <option value=""></option>
                </Input>

                <div className="row">
                  <div className="col-12">
                    <h6 className="font-weight-bold mt-3 text-info">
                      {t('TreasurerIncomeRegisterPage.Description')}:
                    </h6>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder={`${t(
                        'TreasurerIncomeRegisterPage.Description'
                      )}...`}
                      name="description"
                      // value={description}
                      // onFocus={handlerOnFocus}
                      // onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <hr />
                  <div className="col-6 mb-4">
                    <h6 className="font-weight-bold mt-3 text-info">
                      {t('TreasurerSetQuotaPage.Amount')}:
                    </h6>
                    <InputText
                      text={`${t('TreasurerSetQuotaPage.Amount')}...`}
                      name="member"
                      // value={member}
                      // onFocus={handlerOnFocus}
                      // onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-6 mb-4">
                    <h6 className="font-weight-bold mt-3 text-info">
                      {t('TreasurerSetQuotaPage.Default-Fee')}:
                    </h6>
                    <InputText
                      text={`${t('TreasurerSetQuotaPage.Default-Fee')}...`}
                      name="member"
                      // value={member}
                      // onFocus={handlerOnFocus}
                      // onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <hr />

                <Button
                  type="submit"
                  variant="primary"
                  startIcon="fas fa-id-card"
                >
                  {' '}
                  {t('TreasurerIncomeRegisterPage.Add-Pay')}
                </Button>

                <h6 className="m-0 mt-4 mb-2 font-weight-bold text-info">
                  {t('TreasurerSetQuotaPage.Table-Description')}:
                </h6>
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead className="font-weight-bold text-info">
                    <tr>
                      <th>{t('TreasurerSetQuotaPage.Organization')}</th>
                      <th>Año</th>
                      <th>Cuota Definida</th>
                      <th className="text-center">
                        {t('TreasurerSetQuotaPage.Set-Quota')}
                      </th>
                    </tr>
                  </thead>
                  <tfoot className="font-weight-bold text-info">
                    <tr>
                      <th>{t('TreasurerSetQuotaPage.Organization')}</th>
                      <th>Año</th>
                      <th>Cuota Definida</th>

                      <th className="text-center">
                        {t('TreasurerSetQuotaPage.Set-Quota')}
                      </th>
                    </tr>
                  </tfoot>

                  {/* // TODO crear tabla dinamica... */}

                  <tbody>
                    <tr>
                      <td>Nombre organizaciones</td>
                      <td>System Architect</td>

                      <td className="text-center">$320,800</td>
                      <td className="text-center">
                        <i className="fas fa-eye"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Nombre organizaciones</td>
                      <td>Accountant</td>

                      <td className="text-center">$320,800</td>
                      <td className="text-center">
                        <i className="fas fa-eye"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Nombre organizaciones</td>
                      <td>Junior Technical Author</td>

                      <td className="text-center">$320,800</td>
                      <td className="text-center">
                        <i className="fas fa-eye"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- /.container-fluid -->  */}
    </MainLayout>
  );
};
