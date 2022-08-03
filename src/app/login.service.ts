import { Injectable, Inject } from '@angular/core';
import axios from 'axios';
import { AxiosService } from './axios.service';

// @Injectable({
//   providedIn: 'root',
// })

@Injectable()
export class LoginService {
  authService = 'http://localhost:8001/api/auth';

  // constructor(@Inject('paramId') private paramId: string, private _axios: AxiosService) {}
  constructor(private _axios: AxiosService) {}

  async login(payload: any) {
    try {
      console.log('========================');
      // console.log('paramId ==>', this.paramId);
      console.log('========================');

      // const api = this._axios({ serviceName: 'authService' });
      const { data, status }: any = await this._axios.axiosInstance.post(`/login`, payload);
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
      const { data, status }: any = await this._axios.axiosInstance.post(`/otp`, payload);
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
      const { data, status }: any = await this._axios.axiosInstance.get(`/isAuthenticated`);
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
