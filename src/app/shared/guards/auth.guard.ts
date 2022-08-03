import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { AppState } from 'src/app/store/app.state';
import { AppRoutes } from '../enums';
import * as AuthActions from '../../store/actions/auth.actions';
import { Store } from '@ngrx/store';
// @Injectable({
//   providedIn: 'root',
// })
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  // constructor(private _route: Router, private _http: HttpClient) {}
  constructor(private _route: Router, private _loginService: LoginService, private _store: Store<AppState>) {}

  async canActivate(): Promise<boolean> {
    const isAuthenticated = await this._loginService.isAuthenticated();
    console.log('========================');
    console.log('(canActivate) isAuthenticated', isAuthenticated);
    console.log('========================');
    this._store.dispatch(new AuthActions.SetIsAuthenticated(isAuthenticated));
    if (isAuthenticated) {
      return true;
    } else {
      this._route.navigate([AppRoutes.constructRoute(AppRoutes.AuthRoutes.LoginPage)]);
      return false;
    }
  }
}
