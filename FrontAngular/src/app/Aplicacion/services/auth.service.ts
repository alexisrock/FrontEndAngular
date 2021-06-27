import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookies: CookieService) { }

  getUser(): any {
    return this.cookies.get('username');
  }

  setUser(Usuario: string){
    this.cookies.set('username', Usuario);
  }


  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }



}
