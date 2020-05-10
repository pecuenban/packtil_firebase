import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from "./modelos/juego.model";

@Injectable()
export class JuegosService {

  constructor(protected http: HttpClient) { }



  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
   //   Authorization: "my-auth-token"
    })
  };


  getTest(): Observable<Juego> {
    return this.http.get('https://us-central1-packtil.cloudfunctions.net/api/test', this.httpOptions);
  }
  postJuego(juego: Juego): Observable<Juego> {
    return this.http.post('https://us-central1-packtil.cloudfunctions.net/api/test',juego, this.httpOptions);
  }/*
  getJuegos() {
    return this.http.get('https://us-central1-packtil.cloudfunctions.net/api/test');
  }*/

}