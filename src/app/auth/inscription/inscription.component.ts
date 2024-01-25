import { Component } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';
import { RouterLink } from '@angular/router';
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
  public naissance=new Date();
  public genre="";
  public nin="";
  public ninea="";
  public adresse="";
  public numero="";
  public pass="";
  public email="";
  public user: any;
  // Methodes
  constructor(private service:AllservicesService){

  }
  // la fonction qui permet d'inscrire un utilisateur
  inscription() {
    if (this.nom == "" ) {

      // alert('renseigner les champs');
      this.service.message("Désolé", "error", "Veuillez renseigner tous les champs");
    } else {
      // this.user = new User(this.nom, this.prenom, this.naissance, this.email, this.pass,)
      // alert('inscription okay');
      // this.user=new Commerçant(this.nom,this.prenom,this.email,this.pass,this.numero,this.nin,this.ninea,this.adresse,this.genre,this.naissance);
      this.user= new Commerçant(this.nom,this.prenom,this.email,this.pass,this.numero,this.nin,this.ninea,this.adresse,this.genre,this.naissance);

      console.log("user",this.user);
      this.service.post('api/registerCommercant', this.user, (reponse: any) => {
        if (reponse.status == 200) {
          console.log('success',reponse);
          this.service.message("Merci!!!", "success", "Inscription faite avec succès");
        } else {
          console.log('error ',reponse);
          this.service.message("Désolé!!!", "error", "Inscription a échouée");
        }
      });


    }
  }
}
