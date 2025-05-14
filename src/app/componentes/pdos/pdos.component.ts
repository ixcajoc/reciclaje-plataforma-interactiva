import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { AlertService } from '../../services/alert-service.service';
// import { ApiService } from '../../services/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { SonidoService } from '../../services/sonido-service.service';
import HeaderComponent from '../header/header.component';

@Component({
  selector: 'app-pdos',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    MatGridListModule,
    HttpClientModule,
    HeaderComponent
  ],
  templateUrl: './pdos.component.html',
  styleUrl: './pdos.component.css'
})
export class PdosComponent {
  constructor(
    private alertService: AlertService,
    private sonidoService: SonidoService,
    // private apiService: ApiService
  ){}

  organicos: any[]=[] 
  inorganicos: any[]=[] 
  no_reciclables: any[]=[]
  totalPunteo: number = 0
  datos:any = []


  objetos: any[] = [
    { nombre: 'Cáscara de plátano', tipo: 'organico', imagen: 'assets/platano.avif' },
    { nombre: 'Botella de plástico', tipo: 'inorganico', imagen: 'assets/botella.png' },
    { nombre: 'Papel sucio', tipo: 'no_reciclable', imagen: 'assets/papel.jpg' },
    { nombre: 'Cascara de manzana', tipo: 'organico', imagen: 'assets/papel.jpg' },
    { nombre: 'llanta', tipo: 'no_reciclable', imagen: 'assets/papel.jpg' }
  ];

  drop(event: CdkDragDrop<any[]>) {
    let tipoObjeto = event.item.data[event.previousIndex].tipo
    let nombreObjeto = event.item.data[event.previousIndex].nombre
    let tipoContenedor = event.container.id

    if(tipoObjeto === tipoContenedor){
      
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
          transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
        
        // this.alertService.alertaFelicitacion(nombreObjeto,tipoObjeto)
        // this.totalPunteo = this.alertService.punteo(tipoContenedor,tipoObjeto)
        this.sonidoService.respuestaCorrecta();
        this.alertService.sweetAlertCorrecto(nombreObjeto,tipoObjeto);
        this.totalPunteo +=10
  
      }
    }else{
      // this.alertService.alertaRetroalimentacion(nombreObjeto,tipoContenedor)
      // this.totalPunteo = this.alertService.punteo(tipoContenedor,tipoObjeto)
      this.sonidoService.respuestaIncorrecta();
      this.alertService.sweetAlertIncorrecto(nombreObjeto,tipoContenedor);
      this.totalPunteo -=5

    }

  }

  ngOnInit(): void{
    // this.getItems();
    // this.sonidoService.playFondo();
  }

  // getItems(){
  //   this.apiService.getItems().subscribe(
  //     (respuesta) => {
  //       this.datos = respuesta;
  //       console.log(this.datos);
  //     },
  //     (error) => {
  //       console.error('Error al obtener datos', error)
  //     }
      
  //   );

  //   // this.apiService.getItems().subscribe({
  //   //   next: (response)=> {console.log(response)},
  //   //   error: (error) => {console.log(error)}
  //   // });

  // }


}
