import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../juegos.service';
import { Juego } from "../modelos/juego.model";
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-new-juego',
  templateUrl: './new-juego.component.html',
  styleUrls: ['./new-juego.component.css']
})
export class NewJuegoComponent implements OnInit {
juego:Juego = new Juego();
  constructor(protected juegoService: JuegosService, private router: Router) { }


formularioJuego = new FormGroup({
    nombre: new FormControl("", Validators.required),
    descripcion: new FormControl("", Validators.required),
    descripcion_corta: new FormControl("", Validators.required),
    autor: new FormControl("", Validators.required)
  });


  ngOnInit() {
  }
  onSubmit(){
    this.juegoService.postJuego(this.juego).subscribe({
      next: data => this.respuesta(data), //this.estado = data.status,
      error: error => this.error(error) //this.estado = error
    });
  }
   error(error) {
    alert("Error desconocido");
    console.error(error);
  }
  respuesta(data) {
    
      console.log(data);
      this.router.navigate(["/buscar"]);
    
    //this.propagar.emit(false);
  }

}