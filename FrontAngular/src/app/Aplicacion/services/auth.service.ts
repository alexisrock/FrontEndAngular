import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookies: CookieService) { }

  getUser(): any {
    return this.cookies.get('username');
  }

  setUser(Usuario: string | any){
    this.cookies.set('username', Usuario);
  }


  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }



  Logout(){
    this.cookies.delete('username');

  }


}
