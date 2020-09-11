import { userConstants } from '../actions/actionTypes';
// import {AsyncStorage} from 'react-native';

const initialState = {
    regResponse: '',
    loading: false,
    showOtp: true,
    regError:'',
    userToken:''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            console.log(action)
            return {
                loading: true,
            };
        case userConstants.REGISTER_SUCCESS:
            console.log(action)
            return {
                ...state,
                regResponse: action.reg.message,
                loading: false,
                showOtp: true,
                userToken: action.reg.data.authorization_token,
            };

        case userConstants.REGISTER_FAILURE:
            return {
                ...state,
                regError: action.error.message,
                loading: false,
            };

        default:
            return state;
    }
}
