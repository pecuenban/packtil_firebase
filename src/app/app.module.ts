import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {DemoMaterialModule} from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { BuscarJuegoComponent } from './buscar-juego/buscar-juego.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NewJuegoComponent } from './new-juego/new-juego.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { BotonPanicoComponent } from './boton-panico/boton-panico.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    DemoMaterialModule,BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: BuscarJuegoComponent },
      { path: 'buscar', component: BuscarJuegoComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'new_juego', component: NewJuegoComponent },
      { path: 'favoritos', component: FavoritosComponent },
      { path: 'panico', component: BotonPanicoComponent },
      
      
    ]) ],
  declarations: [ AppComponent, BuscarJuegoComponent, PerfilComponent, NewJuegoComponent, FavoritosComponent, BotonPanicoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
