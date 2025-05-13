import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

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

  // punteo(tipoContenedor:string,tipoObjeto:string){
  //   let punteo = 0//esto esta ma. Cada vez que se ejecute la funcion, el valor iniciara en cero, no permitira acumular puntos
  //   if(tipoContenedor == tipoObjeto){
  //     punteo +=10;
  //   }else{
  //     punteo -=5
  //   }
  //   return punteo

  // }

}
