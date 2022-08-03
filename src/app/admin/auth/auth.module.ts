import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { LoginComponent } from './login/login.component';
import { HttpClient } from '@angular/common/http';
import { AxiosClient } from 'src/app/axios.service';
import { LoginService } from 'src/app/login.service';

@NgModule({
  declarations: [AuthComponent, LoginComponent, VerifyotpComponent],
  // providers: [LoginService, AxiosClient, { provide: 'baseURL', useValue: 'http://localhost:8001/api/auth' }, HttpClient],
  providers: [LoginService, AxiosClient, HttpClient],

  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AuthModule {}
