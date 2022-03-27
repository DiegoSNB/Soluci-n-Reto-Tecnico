import { RespuestaAPI } from './../../../interfaces/general/api-responses.model';
import { indicadoresI } from './../../../interfaces/indicadores/indicadores.interface';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';


const API = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})

export class indicadoresService {
  ID: any;
  idClicked: any = -1; //ID asignar rol a usuario
  constructor(private http: HttpClient) { }

  url: string = API + "/";

  obtener(pagne: number): Observable<RespuestaAPI> {
    let direccion = this.url + "indicadores"
    return this.http.get<RespuestaAPI>(direccion);
  }

  obtenerPorId(ID: any): Observable<RespuestaAPI> {
    let direccion = this.url + "indicadores/id/" + ID;
    return this.http.get<RespuestaAPI>(direccion);
  }

  editar(form: indicadoresI) {
    let direccion = this.url + "indicadores/actualizar";
    return this.http.put<RespuestaAPI>(direccion, form);
  }

  nuevo(form: indicadoresI) {
    let direccion = this.url + "indicadores/nuevo";
    return this.http.post<RespuestaAPI>(direccion, form);
  }

  buscar(columna: string, valor: any) {
    let direccion = this.url + "indicadores/"
    return this.http.get<RespuestaAPI>(direccion + `buscar/${columna}/${valor}`);
  }

  eliminar(idinD:any){
    let direccion = this.url + `indicadores/eliminar/${idinD}`
    return this.http.delete<RespuestaAPI>(direccion);
  }
  obtenerNombreRolID(id: any){
    let direccion = this.url + `indicadores/nombreID/${id}`
    return this.http.get<RespuestaAPI>(direccion);
  }
}
