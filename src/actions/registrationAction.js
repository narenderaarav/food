import {userConstants} from './actionTypes';
import {registration,getRegAPI} from '../util/api';

export const registerActions = {
  registerUserAction, 
};

function registerUserAction(data, navigation) {
  return (dispatch) => {
    dispatch(request());
    getRegAPI(data).then(
      (data) => {  
          if(data.success){        
            dispatch(success(data));
          }else{
            dispatch(failure(data));
          }          
      },
      (error) => {
        dispatch(failure(error));
      },
    );
  };

  function request() {
    return {type: userConstants.REGISTER_REQUEST};
  }
  function success(reg) {
    return {type: userConstants.REGISTER_SUCCESS, reg};
  }
  function failure(error) {
    return {type: userConstants.REGISTER_FAILURE, error};
  }
}

