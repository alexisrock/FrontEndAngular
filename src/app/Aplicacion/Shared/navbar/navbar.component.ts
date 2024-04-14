import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public nombrepersona: string = "";

  constructor(public authservices: AuthService, public Routes: Router) {
this.nombrepersona = this.authservices.getUser();

   }

  ngOnInit(): void {
  }


  cerrarSession(){
    this,this.authservices.Logout();
    this.Routes.navigate(['']);

  }
}
