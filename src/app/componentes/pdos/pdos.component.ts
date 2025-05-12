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

@Component({
  selector: 'app-pdos',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    MatGridListModule
    
  ],
  templateUrl: './pdos.component.html',
  styleUrl: './pdos.component.css'
})
export class PdosComponent {

  // categorias: any[] = ["organico","inorganico","no_reciclable"]
  organicos: any[]=[] 
  inorganicos: any[]=[] 
  no_reciclables: any[]=[] 

  objetos: any[] = [
    { nombre: 'Cáscara de plátano', tipo: 'organico', imagen: 'assets/platano.jpg' },
    { nombre: 'Botella de plástico', tipo: 'inorganico', imagen: 'assets/botella.webp' },
    { nombre: 'Papel sucio', tipo: 'no_reciclable', imagen: 'assets/papel.webp' }
  ];

  drop(event: CdkDragDrop<any[]>) {
    let tipoObjeto = event.item.data[event.previousIndex].tipo
    let tipoContenedor = event.container.id
    // console.log(event.item.data[event.previousIndex].tipo)
    // console.log(event.container.id)
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
        
        alert('Dentro')
  
      }
    }else{
      alert('no aceptado')
    }

  }



  
  // drop(event: CdkDragDrop<any[]>) {
    
  //   console.log(event.item.data[event.previousIndex].tipo)
  //   console.log(event.container.id)
  //   if(this.evenPredicate(event.item)){
      
  //     if (event.previousContainer === event.container) {
  //       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //     } else {
  //         transferArrayItem(
  //         event.previousContainer.data,
  //         event.container.data,
  //         event.previousIndex,
  //         event.currentIndex,
  //       );
        
  //       alert('Dentro')
  
  //     }
  //   }else{
  //     alert('no aceptado')
  //   }

  // }

  evenPredicate(item: CdkDrag<any>) {
    
    return item.data % 2 === 0
  }

}
