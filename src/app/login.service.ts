import { Injectable, Inject } from '@angular/core';
import axios from 'axios';
import { AxiosClient } from './axios.service';
import { AUTH_MICROSERVICE } from './shared/constants';

// @Injectable({
//   providedIn: 'root',
// })

@Injectable()
export class LoginService {
  authService = 'http://localhost:8001/api/auth';

  // constructor(@Inject('paramId') private paramId: string, private _axiosClient: AxiosClient) {}
  constructor(private _axiosClient: AxiosClient) {}

  async login(payload: any) {
    try {
      const { data, status }: any = await this._axiosClient.axiosInstance.post(`${AUTH_MICROSERVICE}/login`, payload);
      if (status === 200) {
        return data;
      }
    } catch (err: any) {
      console.error('(login) err.message ==>', err.message);
      console.error('(login) err.status  ==>', err.status);
    }
  }

  async verifyOtp(payload: any) {
    try {
      const { data, status }: any = await this._axiosClient.axiosInstance.post(`${AUTH_MICROSERVICE}/otp`, payload);
      if (status === 200) {
        return data;
      }
    } catch (err: any) {
      console.error('(verifyOtp) err.message ==>', err.message);
      console.error('(verifyOtp) err.status  ==>', err.status);
    }
  }

  async isAuthenticated() {
    try {
      const { data, status }: any = await this._axiosClient.axiosInstance.get(`${AUTH_MICROSERVICE}/isAuthenticated`);
      if (status === 200) {
        return data.data.isAuthenticated;
      }
    } catch (err: any) {
      console.error('(isAuthenticated) err.message ==>', err.message);
      console.error('(isAuthenticated) err.status  ==>', err.status);
      return false;
    }
  }
}
