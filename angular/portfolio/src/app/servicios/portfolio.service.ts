import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {config} from '../data/config/config';
import { Observable } from 'rxjs';
import { Educacion } from '../data/educacion';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerEducacion():Observable<any>{
    return this.http.get<any>(config.baseUrl+"educacion");
  }
  obtenerPersona():Observable<any>{
    return this.http.get<any>(config.baseUrl+"persona");
  }
  obtenerExperiencia():Observable<any>{
    return this.http.get(config.baseUrl+"experiencia");
  }

  guardarNuevaEducacion(educacion:Educacion):Observable <Educacion>{
    console.log(this.http.post(config.baseUrl+"educacion/create", educacion));
    return this.http.post<any>(config.baseUrl+"educacion/create", educacion);
  }
  modificarEducacion(educacion:Educacion):Observable<any>{
    return this.http.put<any>(config.baseUrl+"educacion/update", educacion);
  }
  borrarEducacion(id: number):Observable<any>{
    return this.http.delete<any>(config.baseUrl+"educacion/"+ id);
  }
 
}

