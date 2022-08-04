import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginService } from './login.service';
import { AxiosClient } from './axios.service';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/reducers/auth.reducer';
import { ReadComponent } from './shared/store/components/read/read.component';
import { WriteComponent } from './shared/store/components/write/write.component';
import SharedHeaderModule from 'projects/angular-lib/src/lib/modules/header/header.module';
@NgModule({
  declarations: [AppComponent, HomeComponent, ReadComponent, WriteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedHeaderModule,
    StoreModule.forRoot(
      {
        auth: <any>authReducer,
      },
      {},
    ),
  ],
  providers: [AuthGuard, LoginService, AxiosClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
