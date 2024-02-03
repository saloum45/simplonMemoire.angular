import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AllservicesService } from '../../../services/allservices.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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
    this.loadAll();
  }


  loadAll() {

    this.service.get("api/getProduitsByCommercant", (reponse: any) => {
      console.log(reponse);
      this.produits = reponse.data;
    });
  }
  search() {
    return this.produits.filter((prod: any) => prod.nom_produit.toLowerCase().includes(this.searchInput.toLowerCase()));
  }

  suppression(produitId: any) {
    Swal.fire({
      title: "Etes vous sûr ",
      text: "Cette action est irréversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui",
      cancelButtonText: "Non"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteFunction("api/produit/" + produitId, (reponse: any) => {
          if (reponse.status == 200) {
            // alert("fait");
            this.service.message('Parfait', 'success', 'Suppression faite avec succès');
            this.loadAll();
            console.log(reponse);
            console.warn('idTodel', produitId);
          } else {

            this.service.message('Oops', 'error', 'Suppression échouée');
            console.log(reponse);
            // alert("pas fait");
          }
        });
      }
    });


  }
}
