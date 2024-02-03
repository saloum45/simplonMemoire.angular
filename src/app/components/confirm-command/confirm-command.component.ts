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

  payer(){
    // let addedToPanier=false;
    // this.service.getFromPanier().forEach((element:any) => {

    //   this.service.simplePost("ajoutProduitPanier/"+element.produit.id,((reponse:any)=>{
    //     if (reponse.status==200) {
    //       addedToPanier=!addedToPanier;
    //     }
    //   }));
    // });
    // {
    //   quantite:14
    // }
    // {
    //   produit_id:9,
    //   nombre_produit:1,
    // },
    // {
    //   produit_id:12,
    //   nombre_produit:2,
    // },
    let panier=this.service.getFromPanier();
    let panierProduit:any[]=[];

    panier.forEach((element:any) => {
      panierProduit.push({
        produit_id:element.produit.id,
        nombre_produit:element.quantitePanier,
      });
    });
    let panierToSend={
      panier:panierProduit,
      montant:this.sommeArticles
    }
    console.log(panierToSend);

    this.service.post("api/passerCommande",panierToSend,((reponse:any)=>{

      // if (reponse.status==200) {
      // }
      console.warn(reponse);
    }));
    // if (addedToPanier) {
    //   alert('okay');
    // }
    // this.service.message("En cours de developpement","warning","Cette fonctionnalité n'est encore disponible");
  }

}
