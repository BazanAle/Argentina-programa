import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerEducacion():Observable<any>{
    return this.http.get('http://localhost:8080/educacion');
  }
  obtenerPersona():Observable<any>{
    return this.http.get('http://localhost:8080/persona');
  }
  obtenerExperiencia():Observable<any>{
    return this.http.get('http://localhost:8080/experiencia');
  }
 
}

