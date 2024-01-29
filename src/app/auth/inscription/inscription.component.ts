import { Component } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Commerçant } from '../../models/commerçant';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  // Attributs
  public nom="";
  public prenom="";
  public naissance:any;
  public genre="";
  public nin="";
  public ninea="";
  public adresse="";
  public numero="";
  public pass="";
  public email="";
  public user: any;

  // Methodes
  constructor(private service:AllservicesService, private router:Router){

  }
  // la fonction qui permet d'inscrire un utilisateur
  inscription() {
    if (this.nom == "" || this.prenom=="" || this.naissance==undefined || this.genre=="" || this.nin=="" || this.ninea=="" || this.adresse=="" || this.numero=="" || this.pass=="" || this.email=="") {
      this.service.message("Désolé", "error", "Veuillez renseigner tous les champs");
    } else {
      this.user= new Commerçant(this.nom,this.prenom,this.email,this.pass,this.numero,this.nin,this.ninea,this.adresse,this.genre,this.naissance);
      console.log("user",this.user);
      this.service.post('api/registerCommercant', this.user, (reponse: any) => {
        if (reponse.status == 200) {
          console.log('success',reponse);
          this.router.navigate(['/connexion']);
          this.service.message("Merci!!!", "success", "Inscription faite avec succès,Veuillez vous connecter");
        } else {
          console.log('error ',reponse);
          this.service.message("Désolé!!!", "error", "Inscription a échouée, vérifier la saisie ");
        }
      });
    }
  }
}
