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

  upOrDownQuantity(type: string) {
    // if (this.quantite<1) {
    //   this.quantite=1;
    // }
    if (type == 'up') {
      this.quantite++;
    } else {
      this.quantite--;
    }
  }

  deleteFromPanier(id:any){
    let tab:any=[];
    tab=this.service.getFromPanier();
    tab.forEach((element:any,index:any) => {
      if (element.id==id) {
        tab.splice(index,1);
      }
    });
    localStorage.setItem('panier', JSON.stringify(tab));
    this.panier=this.service.getFromPanier();
    this.service.message("Parfait","success","produit retiré du panier");
  }
}
