import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers} from 'redux';
import loginReducer from './login';
import registrationReducer from './registration';
import * as types from '../actions/actionTypes';

const AppReducer = combineReducers({

  loginReducer: loginReducer,
  registrationReducer:registrationReducer
});

// Clean state when user logs out
export const rootReducer = (state: any = {}, action) => {
  AsyncStorage.removeItem('persist:root');
  if (action.type === types.LOGOUT) {
    state = undefined;
  }

  return AppReducer(state, action);
};
export default rootReducer;
