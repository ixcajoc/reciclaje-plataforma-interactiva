import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './alert-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router:Router,
    private alertService:AlertService,
    
  ) { }

  auth(usuario:string,clave:string){
    if(usuario ==='user' && clave === '123'){
      // alert('Logueado')
      this.alertService.loginSuccess();
        this.router.navigate(['/admin']);
      return true
    }
    else{
      // alert('incorrecto')
      // this.alertService.wrongAlert('Usuario o clave incorrecta')
      this.alertService.loginUnsuccessful();
      return false
    }
  }
}
