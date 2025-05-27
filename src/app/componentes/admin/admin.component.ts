import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import SidebarComponent from './sidebar/sidebar.component';
import { ApiService } from '../../services/api-service.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent,

  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent{
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
