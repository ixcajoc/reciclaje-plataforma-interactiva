import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  
  alertaRetroalimentacion(nombreObjeto:string, frase: string):void{
    alert(`Recuerda que ${nombreObjeto} no pertenece a ${frase}`);
  }

  alertaFelicitacion(nombreObjeto:string, frase: string):void{
    alert(`Correcto! ${nombreObjeto} es ${frase}`);
  }

  sweetAlertCorrecto(nombreObjeto:string, tipoObjeto:string){
    Swal.fire({
      title: `Correcto ${nombreObjeto} es ${tipoObjeto}`,
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "rgba(255, 255, 255, 0.2) url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/assets/patito.gif")
        left top
        no-repeat
      `
    });
  }
  sweetAlertIncorrecto(nombreObjeto:string, tipoObjeto:string){
    Swal.fire({
      title: `Ups! Recuerda que ${nombreObjeto} no pertenece a ${tipoObjeto}`,
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "rgba(255, 255, 255,0.5) url(/images/trees.png)",
      backdrop: `
        rgba(255, 255, 255,0.5)
        url("/assets/minionError.gif")
        left top
        no-repeat
      `
    });
  }
}
