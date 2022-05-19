import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="localhost:8080/educacion";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) { 

    console.log("El servicio de autenticacion esta corriendo");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
  }
  obtenerLos():Observable<any>{
    console.log(this.http.get('url'));
    return (this.http.get('url'));
    
  }

  IniciarSesion(credenciales:any):Observable<any>
  {
    return this.http.post(this.url,credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));

      return data;
    }))
  }
}
