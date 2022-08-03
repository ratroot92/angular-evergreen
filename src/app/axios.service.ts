import { Inject, Injectable } from '@angular/core';
import axios, { Axios } from 'axios';

type ServiceName = 'authService' | 'userService';
interface IRequestHeaders {
  [key: string]: string;
}
interface IGetService {
  serviceName: ServiceName;
  headers?: IRequestHeaders;
  timeout?: number;
}

// @Injectable({
//   providedIn: 'root',
// })

@Injectable()
export class AxiosClient {
  axiosInstance: Axios;
  defaultHeaders = { 'Content-Type': 'application/json', Accept: 'application/json' };

  // constructor(@Inject('baseURL') private baseURL: string) {
  constructor() {
    this.axiosInstance = axios.create({
      timeout: 2000,
      headers: this.defaultHeaders,
    });
    this.initInterceptors();
  }

  initInterceptors() {
    this.axiosInstance.interceptors.request.use(
      function (config: any) {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
          config.headers['accessToken'] = accessToken;
        }

        return config;
      },

      function (error: any) {
        return Promise.reject(error);
      },
    );

    this.axiosInstance.interceptors.response.use(
      function (response: any) {
        if (response?.data?.accessToken) {
          localStorage.setItem('accessToken', response.data.accessToken);
        }

        return response;
      },
      function (error: any) {
        if (error?.response?.status === 401) {
          localStorage.setItem('accessToken', '');
          return Promise.reject(error);
        } else if (error?.response?.status === 400) {
          return Promise.reject({
            message: error.response.data.message,
            status: error.response.status,
          });
        } else {
          return Promise.reject(error);
        }
      },
    );

    return this.axiosInstance;
  }
}
