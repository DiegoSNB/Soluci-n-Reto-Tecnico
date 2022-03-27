import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/admin/auth.service';
import { Router } from '@angular/router';
import { RespuestaAPI } from 'src/app/core/interfaces/general/api-responses.model';
import { loginI } from 'src/app/core/interfaces/general/usuario.model';
import { SweetAlertService } from 'src/app/core/services/sweetAlert/sweet-alert.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  idUsuario: any = "";
  loginForm = new FormGroup({
    correo: new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required),
  });

  iniciandoSesion = false;

  constructor(
    private api: AuthService,
    private router: Router,
    private alertas: SweetAlertService
  ) {}

  errorStatus: boolean = false;
  errorMsj: any = '';

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['admin']);
    }
  }

  onLogin(form: loginI) {

    this.iniciandoSesion = true;  //Mostrar spinner loading

    this.api.getID(form.correo).subscribe((res)=>{      //obtenemos el id del usuario
      let respuesta: any = res;
      let id = respuesta.body;
      this.idUsuario = id;

      //console.log("idUsuario: " + id);
      });

    this.api.loginByUser(form).subscribe(
      (data) => {
        let dataResponse: RespuestaAPI = data;
        if (dataResponse.status == 200) {

          this.iniciandoSesion = false;
          localStorage.setItem('token', dataResponse.body);
          localStorage.setItem('correo',form.correo);       //guardamos nombre del  usuario en almacenamiento local
          localStorage.setItem('idUsuario',this.idUsuario);

          this.api.logueado=true;
          this.router.navigate(['admin']);
        } else {
          this.iniciandoSesion = false;
          this.errorStatus = true;
          this.errorMsj = 'Datos incorrectos';
          console.log('error');
          this.alertas
            .alertaError('Error', 'Datos incorrectos')
            .then((res) => {});
        }
      },
      (err) => {
        this.iniciandoSesion = false;
        this.alertas
          .alertaError('Error', 'Problema de comunicacion')
          .then((res) => {});
        console.log();
      }
    );

  }

}
