import { types } from '../types/types';

/**
 * @param {Example: 'success','error'} type string
 * @param {Mesagge to translate i18n} sms
 * @param {Title to translate i18n Modal} title
 */
export const setAlertAction = alert => ({
  type: types.swalSetAction,
  payload: {
    ...alert,
  },
});

export const removeAlertAction = () => ({
  type: types.swalRemoveAction,
});
