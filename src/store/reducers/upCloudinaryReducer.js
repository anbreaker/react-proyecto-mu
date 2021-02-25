import { types } from '../types/types';

const initialState = {
  url: '',
};

export const upCloudinaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.upFileUrl:
      return {
        ...state,
        url: action.payload,
      };

    default:
      return state;
  }
};
