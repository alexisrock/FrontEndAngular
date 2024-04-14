import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuarios } from '../../models/login';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

display: boolean = false;
letra: string = "";
UserEdit!: Usuarios ;
  constructor(public usuariosservices: UsuarioService) {



    this.usuariosservices.getAllUsuarios();
  }

  ngOnInit(): void {
  }


  showDialog() {
    this.display = true;
    this.letra = "Agregar nuevo usuario";
  }


  hideDialog(){
    this.display = false;

  }

  deleteUser(Usuarios: Usuarios){
    this.usuariosservices.deleteUser(Usuarios);
  }


  updateUser(Usuarios: Usuarios){
    this.letra = "Editar usuario";
    this.display = true;
    this.UserEdit = Usuarios;

  }



}
