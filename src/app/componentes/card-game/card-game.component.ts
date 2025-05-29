import { Component, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card.interface';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api-service.service';
import { Router, RouterModule } from '@angular/router';
import HeaderComponent from '../header/header.component';

@Component({
  selector: 'app-cart-game',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    HeaderComponent
  ],
  templateUrl: './card-game.component.html',
  styleUrl: './card-game.component.css'
})
export class CardGameComponent implements OnInit{
  constructor(
    private apiService: ApiService,
    private router: Router,
  )
  {}
  
  cards: Card[] = [];
  flippedCards: Card[] = [];
  isChecking: boolean = false;
  listaBasura: any= [];

  //datos usuarios
  sonidoOn: boolean = true;
  nombreUsuario:string = 'Denis';
  punteo: number = 0;
  
  
  ngOnInit(): void {
    this.getItems();
  }
  
  getItems() {
    this.apiService.getItems().subscribe({
        next: (response) => {
            this.listaBasura = response;

            // Crear un nuevo arreglo con elementos duplicados
            this.cards = this.listaBasura.flatMap((item:any) => [
                {
                    id: item._id,
                    // image: item.itemName,
                    image: item.imageUrl,
                    flipped: false,
                    matched: false
                },
                {
                    id: item._id,
                    image: item.itemName,
                    flipped: false,
                    matched: false
                }
            ]).sort(() => Math.random() - 0.5); // Barajar el arreglo

            // console.log(this.cards); // Opcional: para verificar el contenido
        },
        error: (error) => {
            console.log(error);
        }
    });
  }
  
  flipCard(card: Card){
    if (this.isChecking || card.flipped || card.matched){
      return;
    }
    card.flipped = true;
    this.flippedCards.push(card);

    if(this.flippedCards.length === 2){
      this.checkForMatch();
    }
  }

  checkForMatch(): void{
    this.isChecking = true;
    const[firstCard, secondCard] = this.flippedCards;

    if(firstCard.image === secondCard.image){
      firstCard.matched = true;
      secondCard.matched = true;
      this.punteo += 10;
    }else{
      this.punteo -=2;
    }
    setTimeout(() => {
      this.flippedCards.forEach((card) => (card.flipped = false))
      this.flippedCards = [];
      this.isChecking = false;
    }, 500);

  }

  resetGame(): void{
    // this.iniciarJuego();
    this.getItems();
    this.punteo = 0;
  }

   finalizar(){
    this.apiService.getPunteo(this.punteo)
    this.router.navigate(['/resumen']);
    
  }



}

