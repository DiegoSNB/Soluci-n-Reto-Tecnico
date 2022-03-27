import { Injectable } from "@angular/core";
import { RespuestaAPI } from "../../interfaces/general/api-responses.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { loginI } from "../../interfaces/general/usuario.model";
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class AuthService{

  constructor(private http:HttpClient){}

  url:string = API + "/";

  loginByUser(form:loginI):Observable<RespuestaAPI>{
    let direccion = this.url + "login/administracion"
    return this.http.post<RespuestaAPI>(direccion,form);
  }

  getID(usuario:string){
    let direccion = this.url + "login/"
    return this.http.get(direccion + `id/${usuario}`);

  }

  logueado = false;
}
