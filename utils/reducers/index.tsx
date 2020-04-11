import { GET_ACCOUNT, CREATE_NEW_ACCOUNT } from '../constants';

const initialState = {
  uuid: null,
  authorised: false,
  wallets:[],
  log:[],
  uuid:null,
  state:null,
  hasWalletPassword: false,
  passwordType:null,
  errorMessage:null,
  errorType:null
};

const functionReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ACCOUNT:
      console.log(action)
      return {
        ...state,
        authorised: action.payload.authorised,
        uuid: action.payload.uuid
      };
    case CREATE_NEW_ACCOUNT:
      console.log(action)
      return {
        ...state,
        wallets: action.payload
      };
    default:
      return state;
  }
}

export default functionReducer;
