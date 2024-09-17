import axios from 'axios';
import config from '../../../config/config.ts';
import {axiosInstance} from "@/methods/axiosInstance";

const authMethods = {
    register: (login, name, surname, email) => {
        return axios.post(config.HOST + '/auth/register', {
            login: login,
            name: name,
            surname: surname,
            email: email,
        });
    },
    registerCodeCheck: (code) => {
        return axios.post(config.HOST + '/auth/register/check', {
            code: code,
        });
    },
    registerSubmit: (code, password) => {
        return axios.post(config.HOST + '/auth/activate', {
            code: code,
            password: password,
        });
    },
    recovery: (email) => {
        return axios.post(config.HOST + '/auth/recovery', {
            email: email,
        });
    },
    login: (email, password) => {
        return () =>
            axios.post(config.HOST + '/auth/login', {
                login: email,
                password: password,
            });
    },
    logout: () => {
        return axiosInstance.post('/auth/logout');
    },
    sendMail: (email) => {
        return axios.post(config.HOST + '/auth/activate/send', {
            email: email,
        });
    },
    userInfo: () => {
        return axiosInstance.get('/user/info');
    },
    refreshToken: () => {
        return axios.post(
            config.HOST + '/auth/refresh',
            {
                token: localStorage.getItem('refresh_token'),
            },
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
                },
            }
        );
    },
    recoveryCheckCode: (code) => {
        return axios.post(config.HOST + '/auth/recovery/check', {
            code: code,
        });
    },
    recoverySubmit: (code, password) => {
        return axios.post(config.HOST + '/auth/recovery/submit', {
            code: code,
            password: password,
        });
    },
};

export default authMethods;