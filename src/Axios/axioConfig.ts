import axios from "axios";
import { useState, useEffect } from 'react';

const axiosInstance = axios.create({
  baseURL: "https://ecom-backend-sys6.onrender.com",
  headers: {
      "Content-Type": "application/json",
  },
});

const useAxiosLoader = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let isSubscribed = true;

        const requestInterceptor = axiosInstance.interceptors.request.use(
            (config) => {
                if (isSubscribed) setLoading(true);
                return config;
            },
            (error) => {
                if (isSubscribed) setLoading(false);
                return Promise.reject(error);
            }
        );

        const responseInterceptor = axiosInstance.interceptors.response.use(
            (response) => {
                if (isSubscribed) setLoading(false);
                return response;
            },
            (error) => {
                if (isSubscribed) setLoading(false);
                return Promise.reject(error);
            }
        );

        return () => {
            isSubscribed = false;
            axiosInstance.interceptors.request.eject(requestInterceptor);
            axiosInstance.interceptors.response.eject(responseInterceptor);
        };
    }, []);

    return [loading];
};

export { axiosInstance, useAxiosLoader };
