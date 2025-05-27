import { Component } from '@angular/core';
import { ApiService } from '../../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardTrashComponent } from '../card-trash/card-trash.component';

@Component({
  selector: 'app-panel-cards',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardTrashComponent,
  ],
  templateUrl: './panel-cards.component.html',
  styleUrl: './panel-cards.component.css'
})
export class PanelCardsComponent {

  constructor(
      private apiService: ApiService,
    )
    {}
  
    listaBasusa: any = []
    
    ngOnInit(){
      this.getItems();
  
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

    

}
