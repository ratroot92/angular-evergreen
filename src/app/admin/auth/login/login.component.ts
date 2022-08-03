import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login.service';
import { AppRoutes } from 'src/app/shared/enums';
import * as AuthActions from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  auth: Observable<any>;

  loginForm = new FormGroup({
    payload: new FormControl('alice@evergreen.com', Validators.required),
    password: new FormControl('pakistan', Validators.required),
  });

  constructor(private _loginService: LoginService, private _route: Router, private _store: Store<AppState>) {
    this.auth = _store.select('auth');
  }

  ngOnInit(): void {
    console.log('ngOnInit', this);
    console.log(' this.auth', this.auth);
  }

  get payload() {
    return this.loginForm.get('payload');
  }
  get password() {
    return this.loginForm.get('password');
  }

  async onSubmit() {
    try {
      if (this.loginForm.valid) {
        const payload: string = this.loginForm.value.payload || '';
        const password: string = this.loginForm.value.password || '';
        const type = payload.includes('@') ? 1 : 2;
        const reqPayload: any = { payload, password, type };
        const res = await this._loginService.login(reqPayload);
        localStorage.setItem('authPayload', JSON.stringify(reqPayload));
        this._store.dispatch(new AuthActions.SetLoginPayload({ payload, type }));
        this._route.navigate([AppRoutes.constructRoute(AppRoutes.AuthRoutes.VerifyOTPPage)]);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  }
}
