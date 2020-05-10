import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../juegos.service';
import { Juego } from "../modelos/juego.model";

@Component({
  selector: 'app-buscar-juego',
  templateUrl: './buscar-juego.component.html',
  styleUrls: ['./buscar-juego.component.css']
})
export class BuscarJuegoComponent implements OnInit {

  constructor(protected juegosService: JuegosService) { }
juegos: Juego[];
  ngOnInit() {
     this.juegosService.getTest()
    .subscribe(
      (data) => { // Success
        this.juegos = data;
        console.log(data)
      },
      (error) => {
        console.error(error);
      }
    );
  }

}