import { Inject, Injectable } from '@angular/core';
import axios from 'axios';

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
export class AxiosService {
  axiosInstance: any;
  defaultHeaders = { 'Content-Type': 'application/json', Accept: 'application/json' };
  microservices = {
    authService: 'http://0.0.0.0:8001/api/auth',
    userService: 'http://0.0.0.0:8002/api/user',
  };
  constructor(@Inject('baseURL') private baseURL: string) {
    console.log('========================');
    console.log('this.baseURL ==>', this.baseURL);
    console.log('========================');

    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });
  }

  getService(options: IGetService) {
    this.axiosInstance = axios.create({
      baseURL: this.microservices[options.serviceName],
      timeout: options.timeout || 1000,
      headers: !options.headers ? this.defaultHeaders : { ...options.headers, ...this.defaultHeaders },
    });
    this.axiosInstance.interceptors.request.use(
      function (config: any) {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          config.headers['accessToken'] = accessToken;
        }

        return config;
      },

      function (error: any) {
        console.log('Do something with request error', error);
        return Promise.reject(error);
      }
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
          console.log('Do something with response error', error);
          return Promise.reject(error);
        }
      }
    );

    return this.axiosInstance;
  }

  async makeRequest(options = {}) {}
}
