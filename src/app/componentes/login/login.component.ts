import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule, 
    RouterModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  

  loginForm: FormGroup;
  
  constructor(
    private authService:AuthService,
    private fb: FormBuilder,
    private router: Router,

  )
  {
    this.loginForm = this.fb.group({
      user: ['',Validators.required],
      password: ['',Validators.required],
    }); 

    }
  
  
    auth(){
      
      const usuairo = this.loginForm.value.user??''
      const password = this.loginForm.value.password??''
      
      // this.apiService.getNombre(nombreUsuario);
      this.authService.auth(usuairo,password);
    
    }
  
    onSubmit() {
      if (this.loginForm.valid) {
        this.auth();
      } else {
        console.error('Formulario inválido');
      }
    }
}
