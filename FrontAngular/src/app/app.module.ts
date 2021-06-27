import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Aplicacion/login/login.component';
import { SidebarComponent } from './Aplicacion/Shared/sidebar/sidebar.component';
import { NavbarComponent } from './Aplicacion/Shared/navbar/navbar.component';



import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardComponent } from './Aplicacion/principal/dashboard/dashboard.component';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent
  ]
  ,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    SidebarModule,
    ButtonModule,
    NgxSpinnerModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
