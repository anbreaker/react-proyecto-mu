import numeral from 'numeral';
import 'numeral/locales/es';

export const changeNum2Cur = number => {
  numeral.locale('es');
  return numeral(number).format('$ 0,0');
};

export const unformat = value => {
  numeral.locale('es');
  return numeral(value).value();
};
