import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pantalla-datos',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule, 
    RouterModule, 
    ReactiveFormsModule, 

  ],
  templateUrl: './pantalla-datos.component.html',
  styleUrl: './pantalla-datos.component.css'
})
export default class PantallaDatosComponent {

  opcion:number = 0;

  loginForm: FormGroup;

  constructor(
    private apiService: ApiService, 
    private fb: FormBuilder,
    private router: Router,

  )
  {
    this.loginForm = this.fb.group({
      user: [''],
    }); 

   }

  getNombre(){
    
    const nombreUsuario = this.loginForm.value.user??''
    
    this.apiService.getNombre(nombreUsuario);
  
  }

  option(option:number){
    if (option === 1){
      // this.router.navigate(['/pdos']);
      this.opcion = 1
    
    }
    else{
      // this.router.navigate(['/memoria']);
      this.opcion = 2 
    }
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.getNombre();
      // this.router.navigate(['/pdos']);
      if(this.opcion === 1){
        this.router.navigate(['/pdos']);
      }else{
        this.router.navigate(['/memoria']);
      }
    } else {
      console.error('Formulario inválido');
    }
  }


  // getNombre(nombre:string){
  //   this.apiService.getNombre(nombre);

  // }
  
}
