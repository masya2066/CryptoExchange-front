import axios from 'axios';
import {config} from "@/appConfig";
import {axiosInstance} from "@/methods/axiosInstance";

const authMethods = {
    register: (login, name, surname, email) => {
        return axios.post(config.API + '/auth/register', {
            login: login,
            name: name,
            surname: surname,
            email: email,
        });
    },
    registerCodeCheck: (code) => {
        return axios.post(config.API + '/auth/register/check', {
            code: code,
        });
    },
    registerSubmit: (code, password) => {
        return axios.post(config.API + '/auth/activate', {
            code: code,
            password: password,
        });
    },
    recovery: (email) => {
        return axios.post(config.API + '/auth/recovery', {
            email: email,
        });
    },
    login: (email, password) => {
        return () =>
            axios.post(config.API + '/auth/login', {
                login: email,
                password: password,
            });
    },
    logout: () => {
        return axiosInstance.post('/auth/logout');
    },
    sendMail: (email) => {
        return axios.post(config.API + '/auth/activate/send', {
            email: email,
        });
    },
    userInfo: () => {
        return axiosInstance.get('/user/info');
    },
    refreshToken: (accessToken, refreshToken) => {
        return axios.post(
            config.API + '/auth/refresh',
            {
                token: refreshToken,
            },
            {
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                },
            }
        );
    },
    recoveryCheckCode: (code) => {
        return axios.post(config.API + '/auth/recovery/check', {
            code: code,
        });
    },
    recoverySubmit: (code, password) => {
        return axios.post(config.API + '/auth/recovery/submit', {
            code: code,
            password: password,
        });
    },
};

export default authMethods;