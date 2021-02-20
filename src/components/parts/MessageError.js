import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../basicComponents/Button';

export const MessageError = props => {
  const { t } = useTranslation('global');
  const { msgError } = props;

  return (
    <>
      {msgError && (
        <div>
          <Button
            disabled={true}
            variant="alert"
            startIcon="fas fa-exclamation-triangle"
          >
            {' '}
            {t(msgError)}
          </Button>
          <hr />
        </div>
      )}
    </>
  );
};
