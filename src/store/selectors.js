export const getLanguaje = state => state.languaje;

export const getLocale = state => state.locale;

export const uidOnIndexDB = state => !!state.auth.uid;
export const userStatus = state => {
  if (!state.auth.active && state.auth.role === 'NotRegistered')
    return 'NotRegistered';
  if (!state.auth.active && state.auth.role) return 'Disabled';
  return 'Enabled';
};
export const getUserAuth = state => state.auth;
export const getUserName = state => state.auth.displayName;
export const getPermisos = state => state.auth.permisos;
export const getPhotoURL = state => state.auth.photoURL;

export const getMsgError = state => state.ui;
export const getMenuUserStatus = state => state.ui.menuUser;
export const getSidebarStatus = state => state.ui.showSidebar;

export const getSwalAlert = state => state.swal.alert;
