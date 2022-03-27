import { indicadoresI } from 'src/app/core/interfaces/indicadores/indicadores.interface';
import { indicadoresService } from 'src/app/core/services/admin/Indicadores/indicadores.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RespuestaAPI } from 'src/app/core/interfaces/general/api-responses.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SweetAlertService } from 'src/app/core/services/sweetAlert/sweet-alert.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  indicador!: indicadoresI;
  idIndicador:any;
  editarForm = new FormGroup({
  ID: new FormControl(''),
  Cantidad: new FormControl(''),
  Nombre: new FormControl(''),
  dato1: new FormControl(''),
  dato2: new FormControl(''),
  dato3: new FormControl(''),
  dato4: new FormControl(''),



});


  @ViewChild('cbCampo') cbCampo!: ElementRef;
  @ViewChild('ctCadena') ctCadena!: ElementRef;

  idUsuario:any;
  constructor(private activerouter:ActivatedRoute, private router:Router, private api: indicadoresService,
    private alertas: SweetAlertService,  ) { }

    ngOnInit(): void {
      this.idIndicador = this.activerouter.snapshot.paramMap.get('id');
      this.api.obtenerPorId(this.idIndicador).subscribe(data =>{
        let dataResponse:RespuestaAPI = data;
        let datos = dataResponse.body
        this.indicador = datos[0];
        this.editarForm.setValue({
          'ID': this.indicador.ID,
          'Nombre': this.indicador.Nombre,
          'Cantidad': this.indicador.Cantidad,
          'dato1': this.indicador.dato1,
          'dato2': this.indicador.dato2,
          'dato3': this.indicador.dato3,
          'dato4': this.indicador.dato4,
        })
      })
    }

    postForms(form:indicadoresI):void{
      this.alertas.alertaConfirmacionEditar('Edición Espacio','¿Desea editar/agregar los datos del indicador '+this.indicador.Nombre+"?")
      .then((res:any) =>{
        if(res.isConfirmed){
          console.log(form);

          this.api.editar(form).subscribe(data =>{
            this.alertas.alertaRealizado()
            .then((res:any) =>{
              this.router.navigate(['/admin']);
              })
          })
        }else{
          this.router.navigate(['/admin']);
        }
      })
    }



}
