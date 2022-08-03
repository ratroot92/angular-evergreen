import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login.service';
import { AppRoutes } from 'src/app/shared/enums';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.css'],
})
export class VerifyotpComponent implements OnInit {
  auth: Observable<any>;
  otpForm = new FormGroup({
    otp: new FormControl('123123', Validators.required),
  });
  constructor(private _loginService: LoginService, private _route: Router, private _store: Store<AppState>) {
    this.auth = _store.select('auth');
  }

  ngOnInit(): void {
    console.log(' this.auth ', this.auth);
  }

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
        this._route.navigate([AppRoutes.constructRoute(AppRoutes.DashboardRoutes.HomePage)]);
      }
    } catch (err: any) {
      console.error('err.message ==>', err.message);
      console.error('err.stack   ==>', err.stack);
    }
  }
}
