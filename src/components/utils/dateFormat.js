import esLocale from 'date-fns/locale/es';
import format from 'date-fns/format';

export const formatToLocaleDate = strDate => {
  try {
    return format(new Date(strDate), 'dd/MM/yyyy', { locale: esLocale });
  } catch (error) {
    return '';
  }
};
