import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import  logueo  from '../../../assets/data/login.json';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

public usuario: Login ={
  usuario: "",
  password: ""
}

public responseusuario: Login ={
  usuario: "",
  password: ""
}

  login(): boolean{
    var loginlist = (logueo as Login[])
    var usuarioconsulta = loginlist.filter(dato =>dato.usuario==this.usuario.usuario)
    if (usuarioconsulta.length !=0 ) {
      console.log(usuarioconsulta);

      var usuarifinal = usuarioconsulta.filter(x=>x.password==this.usuario.password);
      if (usuarifinal.length!=0) {

        this.responseusuario = usuarifinal[0];
        return true;

      } else {
        return false;
      }
    }else{
      return false;
    }



  }
}
