import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RespuestaAPI } from 'src/app/core/interfaces/general/api-responses.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SweetAlertService } from 'src/app/core/services/sweetAlert/sweet-alert.service';
import { indicadoresI } from 'src/app/core/interfaces/indicadores/indicadores.interface';
import { indicadoresService } from 'src/app/core/services/admin/Indicadores/indicadores.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent implements OnInit {
  roles!: indicadoresI;

  nuevoForm = new FormGroup({
    Nombre: new FormControl(''),
    Cantidad: new FormControl(''),
  });

  constructor(private activerouter: ActivatedRoute, private router: Router, private api: indicadoresService,
    private alertas: SweetAlertService) { }

  rol!: indicadoresI[];
  fechaHoy: any;

  ngOnInit(): void {

    this.api.obtener(1).subscribe(data => {
      let dataResponse: RespuestaAPI = data;
      this.rol = dataResponse.body as indicadoresI[];
    })
  }

  postForm(form: indicadoresI) {
    this.alertas.alertaConfirmacionAgregar('Alta indicador', '¿Desea agregar este nuevo indicador?')
      .then((res: any) => {
        if (res.isConfirmed) {

          this.api.nuevo(form).subscribe(data => {
            this.alertas.alertaRealizado()
              .then((res: any) => {
                this.router.navigate(['/admin']);
              })
          })
        }
      })
  }


}
