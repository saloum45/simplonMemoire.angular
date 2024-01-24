import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
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
