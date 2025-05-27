import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router:Router,
    
  ) { }

  auth(usuario:string,clave:string){
    if(usuario ==='user' && clave === '123'){
      alert('Logueado')
        this.router.navigate(['/admin']);
      return true
    }
    else{
      alert('incorrecto')
      return false
    }
  }
}
