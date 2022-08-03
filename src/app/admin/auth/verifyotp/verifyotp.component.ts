import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { AppRoutes } from 'src/app/shared/enums';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.css'],
})
export class VerifyotpComponent implements OnInit {
  otpForm = new FormGroup({
    otp: new FormControl('123123', Validators.required),
  });
  constructor(private _loginService: LoginService, private _route: Router) {}

  ngOnInit(): void {}

  get otp() {
    return this.otpForm.get('otp');
  }

  async onSubmit() {
    try {
      if (this.otpForm.valid) {
        const { payload, password, type }: any = JSON.parse(localStorage.getItem('authPayload') || '');
        const reqPayload = {
          number: parseInt(this.otpForm.value.otp || ''),
          validFor: '/api/auth/otp',
          type,
          payload: 'alice@evergreen.com',
        };
        await this._loginService.verifyOtp(reqPayload);
        console.log('======================================');
        console.log('route ', AppRoutes.constructRoute(AppRoutes.AuthRoutes.VerifyOTPPage));
        console.log('======================================');

        this._route.navigate([AppRoutes.constructRoute(AppRoutes.AuthRoutes.VerifyOTPPage)]);
      }
    } catch (err: any) {
      console.log('err.message ==>', err.message);
      console.log('err.stack   ==>', err.stack);
    }
  }
}
