import { types } from '../types/types';

/**
 * @param {Example: 'success','error'} type string
 * @param {Mesagge to translate i18n} sms
 * @param {Title to translate i18n Modal} title
 */
export const setModelAction = (type, sms, title) => ({
  type: types.swalSetAction,
  payload: (alert = {
    icon: type,
    title: title,
    text: sms,
  }),
});

export const removeAction = () => ({
  type: types.swalRemoveAction,
  payload: '',
});
