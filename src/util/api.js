import Axios from 'axios';
import { BASE_URL } from './constant';
import qs from 'qs'
import AsyncStorage from '@react-native-community/async-storage';

const axios = Axios.create({
    baseURL: BASE_URL,
    timeout: 80000,
    headers: {
        'Content-Type': 'application/json',
    },
    validateStatus: function (status) {
        return status == 200;
    }
});

axios.interceptors.request.use(
    config => {
        // Do something before request is sent
        // config.headers['x-access-token'] = this.userToken;
        return config;
    },
    error => {
        console.log('API ERR:', error.message);
        return Promise.reject(error);
    },
);

axios.interceptors.response.use(
    response => response,
    error => {
        console.log('API ERR:', error);
        return Promise.reject(error);
    },
);
export const userHome = async (data) => {
    let headers = { 'Content-Type': 'multipart/form-data' }
    return await axios.get('user/home', { headers: headers });
};
export const registration = async (data) => {
    console.log(qs.stringify(data));
    let formBody = [];
    for (let property in data) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    let config = { 
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    'X-Localization':'en'
}
    return await axios.post('register', formBody, { headers: config });
};


export const getRegAPI = (data) => {
    let formBody = [];
    for (let property in data) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return fetch('http://15.206.88.76/will_backend/public/api/register', {
        method: 'POST',
        headers: {
            'X-Localization':'en',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
    }) .then((response) => response.json())
    .then((responseJson) => {
        console.log('responseJson')
        return responseJson;
    })
       
};

export const getLoginAPI = (data) => {
    let formBody = [];
    for (let property in data) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return fetch('http://15.206.88.76/will_backend/public/api/login', {
        method: 'POST',
        headers: {
            'X-Localization':'en',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
    }) .then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    })
       
};