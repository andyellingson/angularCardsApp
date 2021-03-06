import { Injectable } from '@angular/core';
import { CardComponent } from 'src/app/_components/card/card.component';

@Injectable({
  providedIn: 'root'
})

export class CardService {

  deckValues: number[] = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,
                          10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11];
  deckImages: string[] = ["2_of_clubs","2_of_diamonds", "2_of_hearts","2_of_spades",
                          "3_of_clubs","3_of_diamonds", "3_of_hearts","3_of_spades",
                          "4_of_clubs","4_of_diamonds", "4_of_hearts","4_of_spades",
                          "5_of_clubs","5_of_diamonds", "5_of_hearts","5_of_spades",
                          "6_of_clubs","6_of_diamonds", "6_of_hearts","6_of_spades",
                          "7_of_clubs","7_of_diamonds", "7_of_hearts","7_of_spades",
                          "8_of_clubs","8_of_diamonds", "8_of_hearts","8_of_spades",
                          "9_of_clubs","9_of_diamonds", "9_of_hearts","9_of_spades",
                          "10_of_clubs","10_of_diamonds", "10_of_hearts","10_of_spades",
                          "jack_of_clubs2","jack_of_diamonds2", "jack_of_hearts2","jack_of_spades2",
                          "queen_of_clubs2","queen_of_diamonds2", "queen_of_hearts2","queen_of_spades2",
                          "king_of_clubs2","king_of_diamonds2", "king_of_hearts2","king_of_spades2",
                          "ace_of_clubs","ace_of_diamonds", "ace_of_hearts","ace_of_spades", "card_back"]


  constructor() {
   }

   getValue(index: number){
     return this.deckValues[index];
   }

   getImagePath(index: number){
      return "./assets/img/" + this.deckImages[index] + ".png";
   }
}
