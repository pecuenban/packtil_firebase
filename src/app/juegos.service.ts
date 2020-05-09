import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class JuegosService {

  constructor(protected http: HttpClient) { }



  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "my-auth-token"
    })
  };


  getTest() {
    return this.http.get('https://us-central1-packtil.cloudfunctions.net/api/test', this.httpOptions);
  }/*
  getJuegos() {
    return this.http.get('https://us-central1-packtil.cloudfunctions.net/api/test');
  }*/

}