import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
 // Attributs
 public  quantite=1;


 // Methodes
 upOrDownQuantity(type:string) {
   // if (this.quantite<1) {
   //   this.quantite=1;
   // }
   if (type=='up') {
     this.quantite++;
   }else{
     this.quantite--;
   }
 }
}
