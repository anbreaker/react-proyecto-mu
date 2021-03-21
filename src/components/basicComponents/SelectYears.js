import React, { useEffect, useState } from 'react';
import { Input } from 'reactstrap';
import { useTranslation } from 'react-i18next';

export const SelectYears = ({ value, onChange, ...props }) => {
  const { t } = useTranslation('global');
  const [years, setYears] = useState([]);

  useEffect(() => {
    const years = [];
    for (let index = 2021; index < 2100; index++) {
      years.push(index);
    }
    return setYears(years);
  }, []);

  return (
    <>
      <h6 className="font-weight-bold text-info">
        {t('TreasurerSetQuotaPage.Select-Year')}
      </h6>
      <Input
        type="select"
        name="year"
        id="year"
        value={value}
        onChange={onChange}
        {...props}
      >
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Input>
    </>
  );
};
