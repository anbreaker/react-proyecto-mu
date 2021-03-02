import { types } from '../types/types';

/**
 * @param {Example: 'success','error'} type string
 * @param {Mesagge to translate i18n} sms
 * @param {Title to translate i18n Modal} title
 * @param {showCancelButton: true},
 * @param {confirmButtonColor: '#E12717'},
 * @param {cancelButtonColor: '#2E59D9'},
 * @param {confirmButtonText: 'Yes, delete it!'}),
 */

export const setAlertAction = (title, text, icon) => ({
  type: types.swalSetAction,
  payload: {
    title,
    text,
    icon,
  },
});

export const removeAlertAction = () => ({
  type: types.swalRemoveAction,
});
