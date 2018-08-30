import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ToastService } from './services/toast.service';
import { AuthService } from './services/auth.service';

import {PanelModule} from 'primeng/panel';
import {InputTextModule, MessageService} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    HttpClientModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  providers: [
    MessageService,
    AuthService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
