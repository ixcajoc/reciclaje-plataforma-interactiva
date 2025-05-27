import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pantalla-resumen',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './pantalla-resumen.component.html',
  styleUrl: './pantalla-resumen.component.css'
})
export class PantallaResumenComponent {
    constructor(
      private apiService: ApiService,
      private router : Router,
    ){}

  public nombreUsuario:string = '';
  public totalPunteo:number = 0;

  ngOnInit(){
    this.getNombre();
    this.getPunteo();
  }
  getNombre(){
    this.nombreUsuario = this.apiService.nombreUser;
  }
  getPunteo(){
    this.totalPunteo = this.apiService.totalPunteo
  }

}


