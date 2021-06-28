import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Aplicacion/login/login.component';
import { DashboardComponent } from './Aplicacion/principal/dashboard/dashboard.component';
import { AuthGuard } from './Aplicacion/guard/auth.guard';
import { GestionUsuariosComponent } from './Aplicacion/principal/gestion-usuarios/gestion-usuarios.component';

const routes : Routes = [
  {path: '' , component: LoginComponent},
  {path: 'dahsboard' , canActivate: [AuthGuard], component: DashboardComponent},
  {path: 'usuarios' , canActivate: [AuthGuard], component: GestionUsuariosComponent},

   {path: '**', redirectTo: ''}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ] ,
  exports: [
     RouterModule
  ]
})
export class AppRoutingModule { }
