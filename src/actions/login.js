import {userConstants} from './actionTypes';
import {getLoginAPI} from '../util/api';
import AsyncStorage from '@react-native-community/async-storage';
export const loginActions = {
  loginUserAction, 
};

function loginUserAction(data, navigation) {
  return (dispatch) => {
    dispatch(request());
   // console.log('getRegAPI(data)');
    getLoginAPI(data).then((data) => {
          if(data.success){
            AsyncStorage.setItem('token',data.data.authorization_token)
            dispatch(success(data));
            navigation.navigate('Home');
          }else{
            console.log(data)
            dispatch(failure(data));
          }
      },
      (error) => {
          console.log();
        dispatch(failure(error));
      },
    );
  };

  function request() {
    return {type: userConstants.LOGIN_REQUEST};
  }
  function success(user) {
    return {type: userConstants.LOGIN_SUCCESS, user};
  }
  function failure(error) {
    return {type: userConstants.LOGIN_FAILURE, error};
  }
}

