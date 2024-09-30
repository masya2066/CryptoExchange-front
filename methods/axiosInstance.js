import {config} from "@/appConfig";
import axios from "axios";
import {storage} from "@/storage";
import authMethods from "@/methods/auth";

export const axiosInstance = axios.create({
  baseURL: config.API,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(storage.accessToken);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        try {
          const resRefresh = await authMethods.refreshToken(); // Assuming refreshToken is a function returning a function
          if (resRefresh?.status === 200 && resRefresh?.data) {
            const { access_token, refresh_token } = resRefresh.data;
            localStorage.setItem(storage.accessToken, access_token);
            localStorage.setItem(storage.refreshToken, refresh_token);

            return axiosInstance(error.config);
          }
        } catch (refreshError) {
          const refreshErr = refreshError;
          if (refreshErr.response?.status !== 200) {
            localStorage.removeItem(storage.accessToken);
            localStorage.removeItem(storage.refreshToken);
            localStorage.removeItem(storage.user);
            throw refreshErr;
          }
        }
      }
    }
    return Promise.reject(error);
  }
);