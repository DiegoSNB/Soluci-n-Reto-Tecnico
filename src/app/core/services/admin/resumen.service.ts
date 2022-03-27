import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestaAPI } from '../../interfaces/general/api-responses.model';

const API = environment.apiUrl;
const RESUMEN = '/resumen/'

@Injectable({
  providedIn: 'root'
})
export class ResumenService {

  constructor(private http: HttpClient) {

  }
  url:string = API + "/";

  espaciosOcupados(){
    return this.http.get(API + RESUMEN +"ocupados");
  }

  espaciosDisponibles(){
    return this.http.get(API + RESUMEN +"disponibles");
  }

  usuariosRegistrados(){
    return this.http.get(API + RESUMEN +"registrados");
  }

  obtenerIDEstacionamientosHoy(){
    return this.http.get(API+RESUMEN+"ingreso");
  }

  obtenerTotalesHoy(idEstacionamiento:any){
    return this.http.get(API+RESUMEN+`total/${idEstacionamiento}`);
  }

  placasVencidas(){
    return this.http.get(API+RESUMEN+"vencidas");
  }

  contarEspacios(id:any){
    let direccion = this.url + "resumen/"
    return this.http.get<RespuestaAPI>(direccion+`/espacios-ocupados-zona/${id}`);
  }

  contarEspaciosDisponibles(id:any){
    let direccion = this.url + "resumen/"
    return this.http.get<RespuestaAPI>(direccion+`/espacios-disponibles-zona/${id}`);
  }

  obtenerHoraRestanteEspacio(id:any){
    let direccion = this.url + "resumen/"
    return this.http.get<RespuestaAPI>(direccion+`/espacios-tiempoEstacionamiento/${id}`);
  }

  fechaActual(){
    return this.http.get(API + RESUMEN +"fecha-actual");
  }


  obtenerdatosEspacio(id:any){
    let direccion = this.url + "estacionamientos/"
    return this.http.get<RespuestaAPI>(direccion+`/parquimetro/${id}`);
  }

  obtenerdatosVehiculo(id:any){
    let direccion = this.url + "estacionamientos/"
    return this.http.get<RespuestaAPI>(direccion+`/estacionamientoActivoID/${id}`);
  }

  obtenerTotalesSemanal(){
    return this.http.get(API+RESUMEN+`ingreso-semana`);
  }

  obtenerTotalesMensual(){
    return this.http.get(API+RESUMEN+`ingreso-mes`);
  }

  obtenerMultasHoy(){
    return this.http.get(API+RESUMEN+`multasHoy`);
  }


}
