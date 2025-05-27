import { Component, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card.interface';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api-service.service';

@Component({
  selector: 'app-cart-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-game.component.html',
  styleUrl: './card-game.component.css'
})
export class CardGameComponent implements OnInit{
  constructor(
    private apiService: ApiService,
  )
  {}
  
  cards: Card[] = [];
  flippedCards: Card[] = [];
  isChecking: boolean = false;
  listaBasura: any= [];
  
  
  ngOnInit(): void {
    this.getItems();
    // this.iniciarJuego();
  }
  // getItems(){
  //   this.apiService.getItems().subscribe({
  //     next: (response)=> {
  //       this.listaBasura = response;
  //       // console.log(response)
  //     },
  //     error: (error) => {console.log(error)}
  //   });
  // }

  // getItems() {
  //   this.apiService.getItems().subscribe({
  //       next: (response) => {
  //           this.listaBasura = response;

  //           // Crear un nuevo arreglo con solo el id y el nombre
  //           this.cards = this.listaBasura.map((item:any) => ({
  //               id: item._id, // Usar _id como id
  //               image: item.itemName, // Usar itemName como nombre
  //               flipped: false,
  //               matched: false
  //           })).sort(() => Math.random() - 0.5); // Barajar el arreglo

  //           console.log(this.cards); // Opcional: para verificar el contenido
  //       },
  //       error: (error) => {
  //           console.log(error);
  //       }
  //   });
  // }

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

            console.log(this.cards); // Opcional: para verificar el contenido
        },
        error: (error) => {
            console.log(error);
        }
    });
  }
  
  
  // iniciarJuego(){
  //   const images = [
  //     '😀','🥶','🥵','👀','💯','💃','🤡','🤑',
  //     '😀','🥶','🥵','👀','💯','💃','🤡','🤑',

  //   ]

  //   this.cards = images.map((image,index) => ({
  //     id: index,
  //     image,
  //     flipped: false,
  //     matched: false
    
  //   }))
  //   .sort(() => Math.random() - 0.5);


  //   // this.listaBasura.forEach((basura: any) => {
  //   //   this.cards = basura.map((itemName: any, _id: any) => ({
  //   //       id: _id,
  //   //       image: itemName,
  //   //       flipped: false,
  //   //       matched: false
  //   //   })).sort(() => Math.random() - 0.5);

  //   // });
  //   // console.log(this.cards)

    
    

  // }


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
  }


}

