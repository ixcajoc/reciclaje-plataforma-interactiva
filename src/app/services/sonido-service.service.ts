import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SonidoService {

  constructor() {}
  
  fondoSong = new Audio('assets/fondo.mp3');
  correctSound = new Audio('assets/correcto.mp3');
  incorrectSound = new Audio('assets/incorrecto.mp3');
  
  playFondo(){
    this.fondoSong.play();
  }
  pauseFondo(){
    this.fondoSong.pause();
  }

  respuestaCorrecta(){
    this.correctSound.play();
  }
  respuestaIncorrecta(){
    this.incorrectSound.play();
  }

}
