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

  onSubmit() {
    if (this.loginForm.valid) {
      this.getNombre();
      this.router.navigate(['/pdos']);
    } else {
      console.error('Formulario inválido');
    }
  }


  // getNombre(nombre:string){
  //   this.apiService.getNombre(nombre);

  // }
  
}
