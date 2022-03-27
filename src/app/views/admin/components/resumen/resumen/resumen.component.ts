import { ExcelService } from './../../../../../core/services/admin/excel/excel.service';
import { indicadoresI } from './../../../../../core/interfaces/indicadores/indicadores.interface';
import { SweetAlertService } from './../../../../../core/services/sweetAlert/sweet-alert.service';
import { indicadoresService } from 'src/app/core/services/admin/Indicadores/indicadores.service';
import { RespuestaAPI } from './../../../../../core/interfaces/general/api-responses.model';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ResumenService } from 'src/app/core/services/admin/resumen.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {

  @ViewChild('cbCampo') cbCampo!: ElementRef;
  @ViewChild('ctCadena') ctCadena!: ElementRef;

  constructor(public resumen: ResumenService, private api: indicadoresService, private router: Router,
    private alertas: SweetAlertService,private excelService: ExcelService) { }
  indicador:indicadoresI[]= [];
id:any;
indicadoresI: any = [];
  ngOnInit() {
    this.api.obtener(1).subscribe(data =>{
      let dataResponse:RespuestaAPI = data;
      this.indicador = dataResponse.body as indicadoresI[];



    })

    }



      buscar():void {
      let columName:string = this.cbCampo.nativeElement.value;
      let value:any = this.ctCadena.nativeElement.value;
      if(value.length>0){
        this.api.buscar(columName,value).subscribe(data=>{
          let dataResponse:RespuestaAPI = data;
          this.indicador = dataResponse.body as indicadoresI[];
        });
      }else{
        this.api.obtener(1).subscribe(data =>{
          let dataResponse:RespuestaAPI = data;
          this.indicador = dataResponse.body as indicadoresI[];
        })
      }
    }


    agregar(id:any){
      this.router.navigate(['indicadores/agregarDatos',id]);
    }
    editar(id:any){
      this.router.navigate(['admin/indicadores/editar',id]);
    }


    eliminar(idiND: any) {
      this.alertas.alertaConfirmacionEliminar('Eliminar indicador', `¿Realmente desea eliminar el indicador?`)
        .then((res: any) => {
          if (res.isConfirmed) {
            console.log('Entra0');

            this.api.eliminar(idiND).subscribe(resp => {
              console.log('Entra1');
              //Mostrar tabla actualizada
              this.api.obtener(1).subscribe(data => {
                console.log('Entra2');
                let dataResponse: RespuestaAPI = data;
                this.indicador = dataResponse.body as indicadoresI[];
              })
              console.log('hecho');

            })
          }
        })
    }

    headers = ['ID','DESCRIPCION','DATO','DATO','DATO','DATO','DATO','DATO'];
    exportar() {

      let arrayMultas: any = [];

      //Dar formato a arreglo de multas

      for (let index = 0; index < this.indicador.length; index++) {

        let reporte:any = [];
        reporte[0] = this.indicador[index].ID;
        reporte[1] = this.indicador[index].Nombre;
        reporte[2] = this.indicador[index].Cantidad;
        reporte[3] = this.indicador[index].dato1;
        reporte[4] = this.indicador[index].dato2;
        reporte[5] = this.indicador[index].dato3;
        reporte[6] = this.indicador[index].dato4;


        arrayMultas.push(reporte);
      }

      //Expotar archivo
      this.excelService.generateExcel('Reporte de datos',this.headers,arrayMultas);


    }



  }
