import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AllservicesService } from '../../../services/allservices.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-produit',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './list-produit.component.html',
  styleUrl: './list-produit.component.css'
})
export class ListProduitComponent implements OnInit {
  // Attributs
  public produits: any = [];
  public searchInput = "";


  // Methodes
  constructor(private service: AllservicesService) {

  }
  ngOnInit(): void {
    this.service.get("api/getProduitsByCommercant", (reponse: any) => {
      console.log(reponse);
      this.produits = reponse.data;
    });
  }

  search(){
    return this.produits.filter((prod:any)=>prod.nom_produit.toLowerCase().includes(this.searchInput.toLowerCase()));
 }
}
