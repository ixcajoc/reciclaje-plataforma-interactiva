import { Component } from '@angular/core';
import { SonidoService } from '../../services/sonido-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pantalla-inicio',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,  
  ],
  templateUrl: './pantalla-inicio.component.html',
  styleUrl: './pantalla-inicio.component.css'
})
export default class PantallaInicioComponent {
  constructor(private sonidoService: SonidoService)
  {}
  ngOnInit(){
    this.playFondo();
  }
  playFondo(){
    this.sonidoService.playFondo();
  }
}
