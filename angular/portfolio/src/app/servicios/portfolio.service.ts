import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {config} from '../data/config/config';
import { Observable } from 'rxjs';
import { Educacion } from '../data/educacion';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Experiencia } from '../data/experiencia';
import { Persona } from '../data/persona';

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
    //Funciones Educacion
  guardarNuevaEducacion(educacion:Educacion):Observable <Educacion>{
    return this.http.post<any>(config.baseUrl+"educacion/create", educacion);
  }
  modificarEducacion(educacion:Educacion):Observable<any>{
    return this.http.put<any>(config.baseUrl+"educacion/update", educacion);
  }
  borrarEducacion(id: number):Observable<any>{
    return this.http.delete<any>(config.baseUrl+"educacion/"+ id);
  }

    //Funciones Experiencia
    guardarNuevaExperiencia(experiencia:Experiencia):Observable<Experiencia>{
      return this.http.post<any>(config.baseUrl+"experiencia/crear", experiencia);
    }
    modificarExperiencia(experiencia:Experiencia):Observable<any>{
      return this.http.put<any>(config.baseUrl+"experiencia/update", experiencia);
    }
    borrarExperiencia(id:number):Observable<any>{
      return this.http.delete<any>(config.baseUrl+"experiencia/"+id);
    }
 
    //Funciones Persona
    modificarPersona(persona:Persona):Observable<any>{
      return this.http.put<any>(config.baseUrl+"persona/update", persona);
    }
}

