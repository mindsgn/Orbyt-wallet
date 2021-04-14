import { ACCOUNT, ERROR } from './constants';

const initialState = {
  uuid: null,
  auth: null,
  account: null
};

const functionReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACCOUNT:
      return {
        ...state,
        account: action.payload.account,
      };
    case ERROR:
        return {
          ...state,
        };
    default:
      return state;
  }
};

export default functionReducer;
