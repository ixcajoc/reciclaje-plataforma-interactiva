import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  sweetAlertCorrecto(nombreObjeto:string, tipoObjeto:string){
    Swal.fire({
      // theme: 'auto',
      icon:'success',
      title: `¡Bien hecho!`,
      text:`${nombreObjeto} es un residuo ${tipoObjeto}`,
      width: 400,
      padding: "1em",
      color: "#716add",
      // color: "#000",
      // background: "rgba(255, 255, 255, 0.8)",
      backdrop: `
        
        rgba(16, 15, 15, 0.5)
        url("/assets/porras.gif")
        left top
        no-repeat
      `
    });
  }
  sweetAlertIncorrecto(nombreObjeto:string, tipoObjeto:string){
    Swal.fire({
      title: `¡Ups!`,
      icon: 'error',
      text: `Recuerda que ${nombreObjeto} es un residuo que pertenece a la categoría ${tipoObjeto}`,
      width: 400,
      padding: "1em",
      color: "#716add",
      // background: "rgba(255, 255, 255,0.5) url(/assets/botella.png)",
      backdrop: `
        rgba(16, 15, 15, 0.5)
        url("/assets/minionPensando.gif")
        left top
        no-repeat
      `
    });
  }

  successAlert(comment:string){
    Swal.fire({
      title: "¡Bien!",
      text: `${comment}`,
      icon: "success"
    });
  }
  wrongAlert(error:string){
    Swal.fire({
      title: "Algo salió mal",
      text: `Error: ${error}`,
      icon: "error"
    });

  }
  loginSuccess(){
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Inicio de sesión exitoso"
    });
  }
  loginUnsuccessful(){ 
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "warning",
      title: "Usuario o clave incorrecta"
    });
  
  }

  informationAlert(){
    Swal.fire({
      
      icon:'info',
      title: "Recuerda que un residuo puede ser...",
      text: `
        Orgánico: cuando provienen de materiales naturales y biodegradables.
        Reciclable: pueden ser recolectados, procesados y transformados en nuevos productos.
        No reciclable: no pueden ser procesados para reutilización.
      `,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }

  // aletas de confeti
    // confeti(){
    //   // confetti({
    //   //   particleCount: 100,
    //   //   spread: 70,
    //   //   origin: { y: 0.6 }
    //   // });
  
    //   var duration = 15 * 1000;
    //   var animationEnd = Date.now() + duration;
    //   var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
    //   function randomInRange(min:number, max:number) {
    //     return Math.random() * (max - min) + min;
    //   }
  
    //   var interval = setInterval(function() {
    //     var timeLeft = animationEnd - Date.now();
  
    //     if (timeLeft <= 0) {
    //       return clearInterval(interval);
    //     }
  
    //     var particleCount = 50 * (timeLeft / duration);
    //     // since particles fall down, start a bit higher than random
    //     confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    //     confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    //   }, 250);
    // }
    // stars(){
    //   var defaults = {
    //     spread: 360,
    //     ticks: 50,
    //     gravity: 0,
    //     decay: 0.94,
    //     startVelocity: 30,
    //     colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
    //   };
  
    //   function shoot() {
    //     confetti({
    //       ...defaults,
    //       particleCount: 40,
    //       scalar: 1.2,
    //       shapes: ['star']
    //     });
  
    //     confetti({
    //       ...defaults,
    //       particleCount: 10,
    //       scalar: 0.75,
    //       shapes: ['circle']
    //       });
    //     }
  
    //   setTimeout(shoot, 0);
    //   setTimeout(shoot, 100);
    // }
  
    // snow(){
    //   var duration = 15 * 1000;
    //   var animationEnd = Date.now() + duration;
    //   var skew = 1;
  
    //   function randomInRange(min:number, max:number) {
    //     return Math.random() * (max - min) + min;
    //   }
  
    //   (function frame() {
    //     var timeLeft = animationEnd - Date.now();
    //     var ticks = Math.max(200, 500 * (timeLeft / duration));
    //     skew = Math.max(0.8, skew - 0.001);
  
    //     confetti({
    //       particleCount: 1,
    //       startVelocity: 0,
    //       ticks: ticks,
    //       origin: {
    //         x: Math.random(),
    //         // since particles fall down, skew start toward the top
    //         y: (Math.random() * skew) - 0.2
    //       },
    //       colors: ['#ffffff'],
    //       shapes: ['circle'],
    //       gravity: randomInRange(0.4, 0.6),
    //       scalar: randomInRange(0.4, 1),
    //       drift: randomInRange(-0.4, 0.4)
    //     });
  
    //     if (timeLeft > 0) {
    //       requestAnimationFrame(frame);
    //     }
    //   }());
    // }

  //alerta para que cuando inicie el juego semuestre una ventana emergente que indique 
  //las insutrcciones de arrastrar y soltars
  

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
