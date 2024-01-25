import { Component } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
  public naissance="";
  public genre="";
  public nin="";
  public ninea="";
  public adresse="";
  public numero="";
  public pass="";
  public email="";

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
      let user

      this.service.post('api/registerCommercant', {nom:"res"}, (reponse: any) => {
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
