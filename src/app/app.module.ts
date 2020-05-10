import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {DemoMaterialModule} from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { BuscarJuegoComponent } from './buscar-juego/buscar-juego.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NewJuegoComponent } from './new-juego/new-juego.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { BotonPanicoComponent } from './boton-panico/boton-panico.component';
import { JuegosService } from './juegos.service';

@NgModule({
  imports:      [ BrowserModule,HttpClientModule, FormsModule,ReactiveFormsModule ,
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
  bootstrap:    [ AppComponent ],
  providers: [JuegosService,{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
