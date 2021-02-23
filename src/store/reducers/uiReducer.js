import { types } from '../types/types';

const initialState = {
  loading: false,
  msgError: null,
  menuUser: false,
  showSidebar: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
      };

    case types.uiRemoveError:
      return {
        ...state,
        msgError: null,
      };

    case types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };

    case types.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };

    case types.uiMenuUserToggle:
      return {
        ...state,
        menuUser: action.payload,
      };

    case types.uiSetShowSidebar:
      return {
        ...state,
        showSidebar: action.payload,
      };

    default:
      return state;
  }
};
