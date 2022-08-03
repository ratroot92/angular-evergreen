import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { VerifyotpComponent } from '../verifyotp/verifyotp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login.service';
import { AxiosService } from '../axios.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AuthComponent, LoginComponent, VerifyotpComponent],
  providers: [LoginService, AxiosService, { provide: 'baseURL', useValue: 'http://localhost:8001/api/auth' }, HttpClient],

  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AuthModule {}
