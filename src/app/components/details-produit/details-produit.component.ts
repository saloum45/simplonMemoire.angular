import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AllservicesService } from '../../services/allservices.service';

@Component({
  selector: 'app-details-produit',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './details-produit.component.html',
  styleUrl: './details-produit.component.css'
})
export class DetailsProduitComponent implements OnInit {
  // Attributs
  public quantite = 1;
  public produit: any;

  // Methodes
  constructor(private service: AllservicesService, private activatedRouter: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.service.simplePost("api/Detailsproduits/" + this.activatedRouter.snapshot.params['id'], (reponse: any) => {
      this.produit = reponse.data;
      console.log("details", reponse.data);
    });
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

  postPanier(produit: any) {
    this.service.postToPanier(produit);
  }

}
