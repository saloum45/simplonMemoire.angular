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
  public nom="test";
  public quantite="12";
  public categorie_id="2";
  public commercant_id="2";
  public image:any;
  public prix ="1240";
  public descripiton="in order";


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
    this.image = event.target.files[0] as File;
  }

  // ajout d'un produit
  ajouter() {
    if (this.nom == "" || this.quantite=="" ) {
      this.service.message("Désolé", "error", "Veuillez renseigner tous les champs");
    } else {
      let formData=new FormData();
      formData.append("image",this.image);
      formData.append("nom_produit",this.nom);
      formData.append("quantite",this.quantite);
      formData.append("categorie_id",this.categorie_id);
      formData.append("commercant_id",this.commercant_id);
      formData.append("description",this.descripiton);
      formData.append("prix",this.prix);

      // let produit=new Produit(this.nom,this.quantite,this.prix,this.descripiton,2,2,formData);
      console.log("produit",formData);
      this.service.post('api/produit/create',formData, (reponse: any) => {
        if (reponse.status == 200) {
          console.log('success',reponse);
          // this.router.navigate(['/connexion']);
          this.service.message("Merci!!!", "success", "Ajout avec succès,Veuillez vous connecter");
        } else {
          console.log('error ',reponse);
          this.service.message("Désolé!!!", "error", "Ajout échoué, vérifier la saisie ");
        }
      });
    }
  }

}
