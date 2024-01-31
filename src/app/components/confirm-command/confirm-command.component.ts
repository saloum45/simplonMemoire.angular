import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AllservicesService } from '../../services/allservices.service';

@Component({
  selector: 'app-confirm-command',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './confirm-command.component.html',
  styleUrl: './confirm-command.component.css'
})
export class ConfirmCommandComponent implements OnInit{
  public nombreArticles: number=0;
  public sommeArticles: number=0;
  public prixLivraion = this.service.prixLivraion;
  public panierProduits:any[]=[];
// Attributs




// Methodes
constructor(private service:AllservicesService){

}
  ngOnInit(): void {
    this.totalArticles();
  }

  totalArticles() {
    this.nombreArticles = 0;
    this.sommeArticles = 0;
    this.panierProduits = this.service.getFromPanier();
    this.panierProduits.forEach((element: any) => {
      this.nombreArticles += element.quantitePanier;
      this.sommeArticles += element.quantitePanier * element.produit.prix;
    });

  }

}
