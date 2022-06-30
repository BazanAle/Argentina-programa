import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {config} from '../data/config/config';
import { Observable } from 'rxjs';
import { Educacion } from '../data/educacion';

import { Experiencia } from '../data/experiencia';
import { Persona } from '../data/persona';
import { Proyecto } from '../data/proyecto';
import { Skill } from '../data/skill';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  


    //Funciones Educacion
  obtenerEducacion():Observable<any>{
    console.log(this.http.get<any>(config.baseUrl+"educacion"));
   return this.http.get<any>(config.baseUrl+"educacion");
  }

  guardarNuevaEducacion(educacion:Educacion):Observable <Educacion>{
    return this.http.post<any>(config.baseUrl+"educacion/create", educacion);
  }
  modificarEducacion(educacion:Educacion):Observable<any>{
    return this.http.put<any>(config.baseUrl+"educacion/update", educacion);
  }
  borrarEducacion(id:number):Observable<any>{
    return this.http.delete<any>(config.baseUrl+"educacion/"+id);
  }

    //Funciones Experiencia

    obtenerExperiencia():Observable<any>{
      return this.http.get(config.baseUrl+"experiencia");
    }
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
    obtenerPersona():Observable<any>{
      return this.http.get<any>(config.baseUrl+"persona");
    }
    modificarPersona(persona:Persona):Observable<any>{
      return this.http.put<any>(config.baseUrl+"persona/update", persona);
    }


    //Funciones Proyecto

    obtenerProyecto():Observable<any>{
      return this.http.get<any>(config.baseUrl+"proyecto");
     }
    guardarNuevoProyecto(proyecto:Proyecto):Observable<Proyecto>{
      return this.http.post<any>(config.baseUrl+"proyecto/crear", proyecto);
    }
    modificarProyecto(proyecto:Proyecto):Observable<any>{
      return this.http.put<any>(config.baseUrl+"proyecto/update", proyecto);
    }
    borrarProyecto(id:number):Observable<any>{
      return this.http.delete<any>(config.baseUrl+"proyecto/"+id);
    }

    //Funciones Skill
    obtenerSkill():Observable<any>{
      return this.http.get<any>(config.baseUrl+"skill");
     }
    guardarNuevoSkill(skill:Skill):Observable<Skill>{
      return this.http.post<any>(config.baseUrl+"skill/create", skill);
    }
    modificarSkill(skill:Skill):Observable<any>{
      return this.http.put<any>(config.baseUrl+"skill/update", skill);
    }
    borrarSkill(id:number):Observable<any>{
      return this.http.delete<any>(config.baseUrl+"skill/"+id);
    }
}

