import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { Routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ToastService } from './services/toast.service';
import { AuthService } from './services/auth.service';

import {PanelModule} from 'primeng/panel';
import {InputTextModule, MessageService} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToastModule} from 'primeng/toast';
import {JwtInterceptor} from './interceptors/jwt.interceptor';
import {HttpErrorInterceptor} from './interceptors/httperror.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing,
    NoopAnimationsModule,
    HttpClientModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    MessageService,
    AuthService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
