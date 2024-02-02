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
    let addedToPanier=false;
    // this.service.getFromPanier().forEach((element:any) => {

    //   this.service.simplePost("ajoutProduitPanier/"+element.produit.id,((reponse:any)=>{
    //     if (reponse.status==200) {
    //       addedToPanier=!addedToPanier;
    //     }
    //   }));
    // });
    {
      quantite:14
    }
    this.service.simplePost("api/ajoutProduitPanier/"+17,((reponse:any)=>{
      if (reponse.status==200) {
        addedToPanier=!addedToPanier;
      }
      console.warn(reponse);
    }));
    if (addedToPanier) {
      alert('okay');
    }
    // this.service.message("En cours de developpement","warning","Cette fonctionnalité n'est encore disponible");
  }

}
