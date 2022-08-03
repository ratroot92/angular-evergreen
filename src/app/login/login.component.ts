import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AxiosService } from 'src/app/axios.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // loginData = {
  //   password: '',
  //   payload: '',
  // };

  loginForm = new FormGroup({
    payload: new FormControl('alice@evergreen.com', Validators.required),
    password: new FormControl('pakistan', Validators.required),
  });

  constructor(private _loginService: LoginService, private _route: Router) {}

  ngOnInit(): void {
    console.log('ngOnInit', this);
    console.log('ngOnInit', this._route);
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
        this._route.navigate(['verify']);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  }
}
