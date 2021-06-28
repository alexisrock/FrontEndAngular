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
import { GestionUsuariosComponent } from './Aplicacion/principal/gestion-usuarios/gestion-usuarios.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { AgregarUsuarioComponent } from './Aplicacion/principal/agregar-usuario/agregar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
    GestionUsuariosComponent,
    AgregarUsuarioComponent
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
    NgxSpinnerModule,
    TableModule,
    DialogModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
