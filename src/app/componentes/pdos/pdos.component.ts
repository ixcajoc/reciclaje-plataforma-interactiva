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
import { HttpClientModule } from '@angular/common/http';
import { SonidoService } from '../../services/sonido-service.service';
import HeaderComponent from '../header/header.component';
import { ApiService } from '../../services/api-service.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pdos',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    MatGridListModule,
    HttpClientModule,
    HeaderComponent,
    RouterModule,

  ],
  templateUrl: './pdos.component.html',
  styleUrl: './pdos.component.css'
})
export class PdosComponent {
  constructor(
    private alertService: AlertService,
    private sonidoService: SonidoService,
    private apiService: ApiService,
    private router: Router,
    
  ){}

  totalPunteo: number = 0
  // datos:any = []
  listaBasusa: any = []
  listaCategories: any = []


  drop(event: CdkDragDrop<any[]>, categoryName: string) {

    let tipoContenedor = event.container.id
    let tipoBasuraId = event.item.data.category

    let nombreBasura = event.item.data.itemName
    let nombreContenedor = categoryName
    
    //se muestra la data del objeto basura que se esta arrastrando
    // console.log("Datos de Ojeto")
    // console.log(event.item.data)

    // console.log('Datos contenedor')
    // console.log(event.container)

    // if(tipoObjeto === tipoContenedor){
    if(tipoBasuraId === tipoContenedor){
      
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
          transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
        
        this.sonidoService.respuestaCorrecta();
        this.alertService.sweetAlertCorrecto(nombreBasura,nombreContenedor);
        this.totalPunteo +=10
  
      }
    }else{
  
      this.sonidoService.respuestaIncorrecta();
      this.alertService.sweetAlertIncorrecto(nombreBasura,nombreContenedor);
      this.totalPunteo -=5

    }

  }

  ngOnInit(): void{
    this.getItems();
    this.getCategories();
    // this.showNombre();
    // this.sonidoService.playFondo();
  }

  getItems(){
    this.apiService.getItems().subscribe({
      next: (response)=> {
        this.listaBasusa = response;
        // console.log(response)
      },
      error: (error) => {console.log(error)}
    });
  }

  getCategories(){

    this.apiService.getCategorias().subscribe({
      next: (response)=> {
        this.listaCategories = response;
        // console.log(response)
      },
      error: (error) => {console.log(error)}
    });

  }

  finalizar(){
    this.apiService.getPunteo(this.totalPunteo)
    this.router.navigate(['/resumen']);

    
  }

}
