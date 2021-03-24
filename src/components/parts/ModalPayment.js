import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { getPaymentById } from '../../store/selectors';
import { InputText } from '../basicComponents/InputText';
import { formatToLocaleDate } from '../utils/dateFormat';
import { changeNum2Cur } from '../utils/formatNumber';
import { useSendGrid } from '../../hooks/useSendMail';

const ModalPayment = ({ open, toggle, year, paymentId }) => {
  const { t } = useTranslation('global');

  const dispatch = useDispatch();

  const payment = useSelector(getPaymentById(year, paymentId));

  const sendMail = event => {
    event.preventDefault();

    const sendMail = useSendGrid();
    sendMail(payment, dispatch, 'INVOICE');
  };

  return (
    <>
      {payment && (
        <Modal isOpen={open} toggle={toggle} centered={true} size="lg">
          <ModalHeader toggle={toggle}>
            <span className="text-primary font-weight-bold">
              {t('ModalPayment.Title')}
            </span>
          </ModalHeader>
          <ModalBody>
            <>
              <div className="row">
                <div className="col-12 col-lg-12">
                  <h6 className="font-weight-bold mt-0">
                    {t('TreasurerIncomeRegisterPage.Member')}:
                  </h6>
                  <InputText
                    addClasses="text-left"
                    name="name"
                    value={payment?.userName}
                    readOnly
                  />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-6">
                  <h6 className="font-weight-bold mt-0">
                    {t('TreasurerIncomeRegisterPage.Date')}:
                  </h6>
                  <InputText
                    addClasses="text-left"
                    name="date"
                    value={formatToLocaleDate(payment?.date)}
                    readOnly
                  />
                </div>
                <div className="col-6">
                  <h6 className="font-weight-bold mt-0">
                    {t('TreasurerIncomeRegisterPage.Quantity')}:
                  </h6>
                  <InputText
                    text={changeNum2Cur(payment?.amount)}
                    addClasses="text-right"
                    name="amount"
                    //value={amount}
                    readOnly
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <h6 className="font-weight-bold mt-3">
                    {t('TreasurerIncomeRegisterPage.Payment-Method')}
                  </h6>
                  <InputText
                    text={t('TreasurerIncomeRegisterPage.Payment-Method')}
                    name="paymentMethod"
                    value={payment?.paymentMethod}
                    readOnly
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <h6 className="font-weight-bold mt-3">
                    {t('TreasurerIncomeRegisterPage.Bank')}:
                  </h6>

                  <InputText
                    text={`${t('TreasurerIncomeRegisterPage.Bank')}...`}
                    name="bank"
                    value={payment.bank}
                    readOnly
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <h6 className="font-weight-bold mt-3">
                    {t('TreasurerIncomeRegisterPage.Check-Number')}
                  </h6>

                  <InputText
                    text={`${t('TreasurerIncomeRegisterPage.Check-Number')}...`}
                    name="checkNumber"
                    value={payment.checkNumber}
                    readOnly
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <h6 className="font-weight-bold mt-3">
                    {t('TreasurerIncomeRegisterPage.Expiration-Date')}
                  </h6>
                  <InputText
                    text={t('TreasurerIncomeRegisterPage.Expiration-Date')}
                    name="dueDate"
                    value={formatToLocaleDate(payment?.dueDate)}
                    readOnly
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h6 className="font-weight-bold mt-3">
                    {t('TreasurerIncomeRegisterPage.Description')}:
                  </h6>
                  <textarea
                    className="form-control text-center"
                    rows="2"
                    placeholder={t('ModalPayment.No-Description')}
                    name="desc"
                    value={payment?.message}
                    readOnly
                  ></textarea>
                </div>
              </div>
            </>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={sendMail}>
              <i className="pr-2 fas fa-envelope text-white"></i>
              {t('ModalPayment.Send-Proof')}
            </Button>
            <Button color="secondary" onClick={toggle}>
              {t('ModalPayment.Cancel')}
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
};

export default ModalPayment;
