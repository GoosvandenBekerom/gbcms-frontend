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
import {JwtInterceptor} from './interceptors/jwt.interceptor';
import {HttpErrorInterceptor} from './interceptors/httperror.interceptor';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { PostOverviewComponent } from './components/postoverview/post.overview.component';
import { TopicOverviewComponent } from './components/topicoverview/topic.overview.component';

import {PanelModule} from 'primeng/panel';
import {InputTextModule, MessageService} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToastModule} from 'primeng/toast';
import {TabMenuModule} from 'primeng/tabmenu';
import {DataViewModule} from 'primeng/dataview';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    PostOverviewComponent,
    TopicOverviewComponent
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
    ToastModule,
    TabMenuModule,
    DataViewModule
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
