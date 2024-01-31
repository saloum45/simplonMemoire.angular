import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AllservicesService } from '../../services/allservices.service';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit {
  // Attributs
  public quantite = 1;
  public panier:any=[];

  // Methodes
  constructor(private service: AllservicesService) {

  }

  ngOnInit(): void {
    this.panier=this.service.getFromPanier();
  }

  upOrDownQuantity(type: string,id:any) {
    // if (this.quantite<1) {
    //   this.quantite=1;
    // }
    let panierProduit=this.service.getFromPanier();
    panierProduit.forEach((element:any) => {
      if (element.produit.id==id ) {
        if (type == 'up') {
          // this.quantite++;
          element.quantitePanier++;
        } else {
          // this.quantite--;
          element.quantitePanier--;
          if (element.quantitePanier<1) {
            element.quantitePanier=1;

          }
        }
      }
    });
    localStorage.setItem("panier",JSON.stringify(panierProduit));
    this.panier=this.service.getFromPanier();
  }

  deleteFromPanier(id:any){
    let tab:any=[];
    tab=this.service.getFromPanier();
    tab.forEach((element:any,index:any) => {
      if (element.produit.id==id) {
        tab.splice(index,1);
      }
    });
    localStorage.setItem('panier', JSON.stringify(tab));
    this.panier=this.service.getFromPanier();
    this.service.message("Parfait","success","produit retiré du panier");
  }


}
