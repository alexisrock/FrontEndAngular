import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Aplicacion/login/login.component';
import { DashboardComponent } from './Aplicacion/principal/dashboard/dashboard.component';
import { AuthGuard } from './Aplicacion/guard/auth.guard';

const routes : Routes = [
  {path: '' , component: LoginComponent},
  {path: 'dahsboard' , canActivate: [AuthGuard], component: DashboardComponent},
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
