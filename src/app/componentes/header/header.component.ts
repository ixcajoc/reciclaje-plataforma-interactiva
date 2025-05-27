import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SonidoService } from '../../services/sonido-service.service';
import { ApiService } from '../../services/api-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export default class HeaderComponent {

  @Input() punteo!: number;
  sonidoOn: boolean = true;
  nombreUsuario:string = '';

  constructor(
    private sonidoService: SonidoService,
    private apiService: ApiService,

  ){}
  ngOnInit(): void{
    this.sonidoService.fondoSong.volume = 0.5;
    this.playSong();
    this.getNombre();
  }

  playSong(){
    this.sonidoService.playFondo();
  }
  pauseSong(){
    this.sonidoService.pauseFondo();
  }  

  volumenOn(valor:boolean){
    if(valor){
      this.sonidoOn = true;
      this.playSong();
      
    }else{
      this.sonidoOn = false;
      this.pauseSong();
    }
  }

  volumen(event:any){  
    if(event.target.value > 0){
      this.sonidoService.fondoSong.volume = event.target.value; 
      this.sonidoService.correctSound.volume = event.target.value; 
      this.sonidoService.incorrectSound.volume = event.target.value; 
      this.volumenOn(true);
    }else{
      this.volumenOn(false);
    }
  }

  getNombre(){
    this.nombreUsuario = this.apiService.nombreUser;
  }
  
}