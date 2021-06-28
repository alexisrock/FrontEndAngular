import { Injectable } from '@angular/core';
import  usuarios  from '../../../assets/data/Usuarios.json';
import { Usuarios } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public listaUsuarios: Usuarios[]=[];
  constructor() {


  }

  getAllUsuarios(){
  this.listaUsuarios  = ( usuarios as Usuarios[])

  }

  addUser(usuarionew: Usuarios){
    this.listaUsuarios.push(usuarionew);
  }

  deleteUser(usuarion: Usuarios){

    var indice = this.listaUsuarios.indexOf(usuarion);
    this.listaUsuarios.splice(indice,1);

  }
}
