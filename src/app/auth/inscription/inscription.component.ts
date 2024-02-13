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
  public nom = "";
  public prenom = "";
  public naissance: any;
  public genre = "";
  public nin = "";
  public ninea = "";
  public adresse = "";
  public numero = "";
  public pass = "";
  public email = "";
  public user: any;
  public displayForme = false;
  public formType = false;
  public showHidePassword: any;




  // Methodes
  constructor(private service: AllservicesService, private router: Router) {

  }
  // la fonction qui permet d'inscrire un utilisateur
  inscription(chemin: any) {
    // alert(chemin);
    if (this.nom == "" || this.prenom == "" || this.naissance == undefined || this.genre == "" || this.adresse == "" || this.numero == "" || this.pass == "" || this.email == "") {
      this.service.message("Désolé", "error", "Veuillez renseigner tous les champs");
    } else {
      this.user = new Commerçant(this.nom, this.prenom, this.email, this.pass, this.numero, this.nin, this.ninea, this.adresse, this.genre, this.naissance);
      console.log("user", this.user);
      this.service.post(chemin, this.user, (reponse: any) => {
        if (reponse.status == 200) {
          console.log('success', reponse);
          this.router.navigate(['/connexion']);
          this.service.message("Merci!!!", "success", "Inscription faite avec succès,Veuillez vous connecter");
        } else {
          console.table(reponse.errorsList);
          console.log('error ', reponse);
          console.log('error eclaté', Object.values(reponse.errorsList));
          // this.service.message("Désolé!!!", "error", "Inscription a échouée, vérifier la saisie =>"+Object.values(reponse.errorsList));
          if (reponse.errorsList) {

            this.service.message("Désolé!!!", "error", "Inscription  échouée, vérifier la saisie => "+Object.values(reponse.errorsList).join('--'));
          }else{

            this.service.message("Désolé!!!", "error", "Inscription  échouée, vérifier la saisie ");
          }
        }
      });
    }
  }
  // gerer le formulaire selon le type d'inscription
  formTypeDisplay(type: boolean) {
    this.displayForme = true;
    this.formType = type;
  }

  // retour sur choix de l'inscription
  getBackChoice() {
    this.displayForme = false;
  }


  showPassword() {
    this.showHidePassword = document.getElementById('passwordInput');
    if (this.showHidePassword.type == 'text') {
      this.showHidePassword.type = 'password';
    } else {
      this.showHidePassword.type = 'text';
    }
  }
}
