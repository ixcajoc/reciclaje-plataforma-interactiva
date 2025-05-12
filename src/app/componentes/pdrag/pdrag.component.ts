import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-pdrag',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './pdrag.component.html',
  styleUrl: './pdrag.component.css'
})
export default class PdragComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  objetos: any[] = [
    { nombre: 'Cáscara de plátano', tipo: 'orgánico', imagen: 'assets/platano.jpg' },
    { nombre: 'Botella de plástico', tipo: 'inorgánico', imagen: 'assets/botella.webp' },
    { nombre: 'Papel sucio', tipo: 'no reciclable', imagen: 'assets/papel.webp' }
  ];
  
  // objetos = ['manzana', 'basura', 'papel', 'botella', 'metal'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  
}
