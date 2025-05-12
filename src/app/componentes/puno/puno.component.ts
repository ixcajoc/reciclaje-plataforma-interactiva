import { CdkDrag, CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-puno',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './puno.component.html',
  styleUrl: './puno.component.css'
})
export default class PunoComponent {

  all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  even = [10];


  drop(event: CdkDragDrop<number[]>) {
  
    if(this.evenPredicate(event.item)){

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
  // drop(event: CdkDragDrop<number[]>) {
  //   console.log(event.container)
  
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {

  //     if(event.item.dropped){
  //       transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex,
        
  //     );
  //     alert('Dentro')

  //     }else{

  //     }
      
  //   }
  // }

  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<number>) {
    return item.data % 2 === 0
  }

  onDrop(event: CdkDragDrop<any[]>){
    if (event.item.dropped){
      alert('dentro')

    }

  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    // alert('rechazado')
    return false;
  }
 

}
