
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {config} from '../data/config/config';
import { Observable, tap } from 'rxjs';
import { LoginDto } from '../data/LoginDto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }

  public login(credentials:LoginDto) : Observable<Boolean> {
    return this.http.post<Boolean>(config.baseUrl+"login", credentials).pipe(
      tap((response:Boolean)=>{
        if (response)
        sessionStorage.setItem("user","abazan");
      })
    );
  }

  public logout() {
    sessionStorage.removeItem("user");
  }

  public isUserLogged():Boolean {
    return sessionStorage.getItem("user")!== null;
  }
}



/*import { Injectable } from '@angular/core';
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
*/