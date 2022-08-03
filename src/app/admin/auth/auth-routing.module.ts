import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { AuthComponent } from './auth.component';
import { AppRoutes } from 'src/app/shared/enums';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: AppRoutes.AuthRoutes.LoginPage,
        component: LoginComponent,
      },
      {
        path: AppRoutes.AuthRoutes.VerifyOTPPage,
        component: VerifyotpComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
