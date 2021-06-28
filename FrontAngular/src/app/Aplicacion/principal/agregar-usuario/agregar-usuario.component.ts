import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Usuarios } from '../../models/login';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
  @Input('data')  usuarioedit!: Usuarios ;
  @Output('closedisplay') accion= new EventEmitter();
  public mensaje: string = "";

  myform: FormGroup=new FormGroup({});

  constructor(public fb: FormBuilder, public usuarioservices: UsuarioService) {
    this.myform = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      identificacion: ['', Validators.required],
      rol: ['', Validators.required],
      estado: ['', Validators.required],
      contraseña: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],

    });

  }

  ngOnInit(): void {

    if(this.usuarioedit !== undefined){

      this.showDatos();
    }

  }
showDatos(){
  this.myform.get('nombres')!.setValue( this.usuarioedit.nombres);
  this.myform.get('apellidos')!.setValue( this.usuarioedit.apellidos);
  this.myform.get('identificacion')!.setValue( this.usuarioedit.identificacion);
  this.myform.get('rol')!.setValue( this.usuarioedit.rol);
  this.myform.get('estado')!.setValue( this.usuarioedit.estado);
  this.myform.get('telefono')!.setValue( this.usuarioedit.telefono);
  this.myform.get('correo')!.setValue( this.usuarioedit.correo);

}



  hideDialog(){
    this.accion.emit();
  }

  save(){
    if(this.usuarioedit !== undefined){

    }else{
    this.addUser();
    }
  }



  addUser(){
    if(this.myform.valid){


      var Usuarios: Usuarios = {
          nombres: this.myform.value.nombres,
          apellidos: this.myform.value.apellidos,
          identificacion: this.myform.value.identificacion,
          estado: this.myform.value.estado,
          rol:  this.myform.value.rol,
          id: Math.random(),
          telefono: this.myform.value.telefono,
          correo: this.myform.value.correo
      }

      this.usuarioservices.addUser(Usuarios);
      this.myform.reset();
      this.accion.emit();

    }else{
      setTimeout(() => {
        this.mensaje = "Tiene campos sin llenar";

      }, 3000);
    }

  }
}
