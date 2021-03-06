import { createAction, createReducer } from '@reduxjs/toolkit';


const initialState = {
  data: [],
};

export const getLoginAction = createAction(
  'GET_LOGIN_ACTION',
);


export default createReducer(initialState, {
  [getLoginAction.type]: (state, action) => {
    if (action.payload.length !== 0) localStorage.setItem('authenticated', true);
    return {
      ...state,
      data: action.payload,
    };
  },
});
