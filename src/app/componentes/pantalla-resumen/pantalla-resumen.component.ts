import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { Router, RouterModule } from '@angular/router';
import confetti from 'canvas-confetti';
// import * as confetti from 'canvas-confetti';

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
    this.confeti();
    this.stars();
    this.snow();
  }
  getNombre(){
    this.nombreUsuario = this.apiService.nombreUser;
  }
  getPunteo(){
    this.totalPunteo = this.apiService.totalPunteo
  }
  confeti(){
    // confetti({
    //   particleCount: 100,
    //   spread: 70,
    //   origin: { y: 0.6 }
    // });

    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min:number, max:number) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  }
  stars(){
    var defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ['star']
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ['circle']
        });
      }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
  }

  snow(){
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var skew = 1;

    function randomInRange(min:number, max:number) {
      return Math.random() * (max - min) + min;
    }

    (function frame() {
      var timeLeft = animationEnd - Date.now();
      var ticks = Math.max(200, 500 * (timeLeft / duration));
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          // since particles fall down, skew start toward the top
          y: (Math.random() * skew) - 0.2
        },
        colors: ['#ffffff'],
        shapes: ['circle'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4)
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    }());
  }

}


