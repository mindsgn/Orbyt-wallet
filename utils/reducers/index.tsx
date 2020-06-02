import { GET_ACCOUNT, ERROR, CREATE_NEW_ACCOUNT, ADD_PHONE } from '../constants';

const initialState = {
  uuid: null,
  authorised: false,
  wallets:[{type:'ethereum'}, {type:'ripple'}],
  log:null,
  uuid:null,
  state:null,
  hasWalletPassword: false,
  passwordType:null,
  errorMessage:null,
  error:false,
  errorMessage:null,
  network:null,
  balance: 0.00,
  currency:'',
  transactions:[],
  notifications:null,
};

const functionReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ACCOUNT:
      return {
        ...state,
        authorised: action.payload.authorised,
        uuid: action.payload.uuid,
        transactions: action.payload.transactions
      };
    case CREATE_NEW_ACCOUNT:
      return {
        ...state,
        wallets: action.payload
      };
    case CREATE_NEW_ACCOUNT:
      return {
        ...state,
        wallets: action.payload
      };
    case ERROR:
        return {
          ...state,
          error:action.payload.error,
          errorMessage:action.payload.errorMessage
        };
    default:
      return state;
  }

}

export default functionReducer;
