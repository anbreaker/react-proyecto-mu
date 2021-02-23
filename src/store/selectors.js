export const getLanguaje = state => state.languaje;

export const getMsgError = state => state.ui;

export const getLocale = state => state.locale;

export const getRemember = state => state.remember;

export const isLogged = state => !!state.auth.uid;

export const getUserName = state => state.auth.displayName;

export const getMenuUserStatus = state => state.ui.menuUser;

export const getSidebarStatus = state => state.ui.showSidebar;

export const getPermisos = state => state.auth.permisos;
