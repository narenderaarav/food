import {userConstants} from '../actions/actionTypes';
// import {AsyncStorage} from 'react-native';

const initialState = {
  userData: {},
  loading: false,
  isSignout: false,
  userToken: null,
  loginError: '',
  loginMessage:''
  
};

export default function (state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loading: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.user.data,
        loading: false,
        showOtp: true,
        //userToken: action.user.accessToken,
        loginMessage:action.user.message
      };

    case userConstants.TOKEN_RESTORE:
      return {
        ...state,
        userData: state.userData,
        userToken: action.token,
      };

    case userConstants.LOGOUT_REQUEST:
      return {
        ...state,
        userData: '',
        loading: false,
        showOtp: true,
        userToken: '',
      };
    case userConstants.LOGIN_FAILURE:
      console.log(action.error.message)
      return {
        ...state,
        loginError: action.error.message,
        loading: false,
      };
    default:
      return state;
  }
}
