import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details-produit',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './details-produit.component.html',
  styleUrl: './details-produit.component.css'
})
export class DetailsProduitComponent {
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
