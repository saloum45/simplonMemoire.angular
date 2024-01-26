import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../../../services/allservices.service';
import { Produit } from '../../../models/produit';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent implements OnInit {
  // Attributs
  public categories:any=[];
  // public file="";
  public nom="";
  public quantite="";
  public categorie_id="";
  public commercant_id="";
  public image="";
  public prix ="";
  public descripiton="";


  // Methodes
  constructor(private service:AllservicesService){

  }
  ngOnInit(): void {
    this.service.get("api/categories",(reponse:any)=>{
      this.categories=reponse.data;
      console.log(reponse.data);
    });
  }

  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image = event.target.files[0];
  }

  // ajout d'un produit
  ajouter() {
    if (this.nom == "" || this.quantite=="" ) {
      this.service.message("Désolé", "error", "Veuillez renseigner tous les champs");
    } else {
      let produit=new Produit(this.nom,this.quantite,this.prix,this.descripiton,2,2,this.image);
      console.log("produit",produit);
      this.service.post('api/produit/create', produit, (reponse: any) => {
        if (reponse.status == 200) {
          // console.log('success',reponse);
          // this.router.navigate(['/connexion']);
          this.service.message("Merci!!!", "success", "Ajout avec succès,Veuillez vous connecter");
        } else {
          // console.log('error ',reponse);
          this.service.message("Désolé!!!", "error", "Ajout échoué, vérifier la saisie ");
        }
      });
    }
  }

}
