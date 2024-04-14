import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myform: FormGroup = new FormGroup({});
  constructor(private renderer: Renderer2, public fb: FormBuilder, private messageService: MessageService,
     private loginservices: LoginService, private auth: AuthService,  private router: Router, public spinner: NgxSpinnerService) {



this.myform = this.fb.group({
  Usuario: ['', Validators.required],
  Password: ['', Validators.required],
});


  }

  ngOnInit(): void {

    this.renderer.setStyle(
      document.body,
      "background-image",
      'url("/assets/img/calle.jpg")'
    );
    this.renderer.setStyle(
      document.body,
      "background-repeat",
      'no-repeat'
    );
    this.renderer.setStyle(
      document.body,
      "background-size",
      'cover'
    );
    this.renderer.setStyle(
      document.body,
      "background-attachment",
      'fixed'
    );
    this.renderer.setStyle(
      document.body,
      "background-color",
      'transparent'
    );

    this.renderer.setStyle(
      document.body,
      "border-radius",
      '50%'
    );
  }

  Loggin(){
    if (this.myform.valid) {
      this.loginservices.usuario.usuario = this.myform.value.Usuario;
      this.loginservices.usuario.password = this.myform.value.Password;
      if(this.loginservices.login()){
        this.auth.setUser(this.loginservices.responseusuario.nombreCompleto?.toString());
        this.spinner.show();

        setTimeout(()=>{
          this.spinner.hide();
          this.router.navigate( ['dahsboard']);
        }, 3000)


          console.log('entro')
      }else{
        this.addSingle("el usuario y/contraseña no corresponden");
      }

    } else {

      this.addSingle("Existen campos por llenar");
    }

  }


  addSingle(mensaje: string) {
    this.messageService.add({severity:'error', summary:'Error', detail:mensaje});
}

}
