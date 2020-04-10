import { GET_ACCOUNT, CREATE_NEW_ACCOUNT } from '../constants';

const initialState = {
  uuid: null,
  authorised: false,
  wallets:[],
  uuid:null,
  state:null
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
        hasAccount: action.payload
      };
    default:
      return state;
  }
}

export default functionReducer;
