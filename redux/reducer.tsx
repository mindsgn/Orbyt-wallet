import { GET_ACCOUNT, ERROR, CREATE_NEW_ACCOUNT, ADD_PHONE } from './constants';

const initialState = {
  uuid: null,
};

const functionReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ACCOUNT:
      return {
        ...state,
      };
    case CREATE_NEW_ACCOUNT:
      return {
        ...state,
      };
    case CREATE_NEW_ACCOUNT:
      return {
        ...state,
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
