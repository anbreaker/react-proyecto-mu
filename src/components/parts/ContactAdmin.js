import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../basicComponents/Button';
import { InputText } from '../basicComponents/InputText';

export const ContactAdmin = () => {
  const { t } = useTranslation('global');

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary text-center">
            {t('ContactAdmin.Contact')}
          </h6>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <form>
                <div className="row">
                  <div className="col-4 text-center">
                    <h6 className="font-weight-bold mt-3 text-primary">
                      {t('ContactAdmin.Name')}:
                    </h6>
                    <InputText
                      text={`${t('ContactAdmin.Name')}...`}
                      name="member"
                      // value={member}
                      // onFocus={handlerOnFocus}
                      // onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-4 text-center">
                    <h6 className="font-weight-bold mt-3 text-primary">
                      {t('ContactAdmin.Email')}:
                    </h6>
                    <InputText
                      text={`${t('ContactAdmin.Email')}...`}
                      name="member"
                      // value={member}
                      // onFocus={handlerOnFocus}
                      // onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-4 text-center">
                    <h6 className="font-weight-bold mt-3 text-primary">
                      {t('ContactAdmin.Mobile')}:
                    </h6>
                    <InputText
                      text={`${t('ContactAdmin.Mobile')}...`}
                      name="member"
                      // value={member}
                      // onFocus={handlerOnFocus}
                      // onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <h6 className="font-weight-bold mt-3">
                  {t('TreasurerIncomeRegisterPage.Date')}:
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

                <hr />

                <div className="col-12">
                  <Button
                    type="submit"
                    variant="primary"
                    startIcon="fas fa-share-square"
                  >
                    {' '}
                    {t('TreasurerIncomeRegisterPage.Cancel')}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
