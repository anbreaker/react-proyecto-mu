import numeral from 'numeral';
import 'numeral/locales/es';

export const changeNum2Cur = number => {
  if (number) {
    numeral.locale('es');
    return numeral(number).format('$ 0,0');
  }
  return 0;
};

export const formatNumber = number => {
  if (number) {
    numeral.locale('es');
    return numeral(number).format('0,0');
  }
  return 0;
};

export const unformat = value => {
  numeral.locale('es');
  return numeral(value).value();
};
