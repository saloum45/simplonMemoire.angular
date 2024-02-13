import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { AllservicesService } from '../../services/allservices.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
// import * as cryptoJs from 'crypto-js';
@Component({
  selector: 'app-connexion',
  standalone: true,
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css',
  imports: [
    FooterComponent,
    FormsModule
  ]
})
export class ConnexionComponent {
  // Attributs
  public password = "Saloum45";
  public email = "saloumfall45@gmail.com";
  public showHidePassword: any;
  // Methodes
  constructor(private service: AllservicesService, private router: Router) {

  }

  // la fonction qui permet d'inscrire un utilisateur
  connexion() {
    if (this.password == "" || this.email == "") {
      this.service.message("Désolé", "error", "Veuillez renseigner tous les champs");
    } else {

      this.service.post('api/login', { email: this.email, password: this.password }, (reponse: any) => {
        if (reponse.status == 200) {
          let onlineUser = {
            token: reponse.authorization.token,
            id: reponse.user.id,
            type: reponse.user.type
          }
          // console.warn("logged user", reponse);
          localStorage.setItem("onlineUser", JSON.stringify(onlineUser));
          localStorage.setItem("tokenExpiryTime", JSON.stringify(10000));
          if (reponse.user.type == "admin") {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/accueil']);
          }
          this.service.message("Bienvenue " + reponse.user.prenom+" "+reponse.user.nom, "success", "Connexion faite avec succès");
          // this.deconnexionAutomatique();
          // console.log("reponse conn",reponse);
        } else {
          // console.log('error ',reponse);
          // this.service.message("Désolé!!!", "error", "connexion  échouée, vérifier la saisie ");
          if (reponse.errorsList) {

            this.service.message("Désolé!!!", "error", "Connexion  échouée, vérifier la saisie => "+Object.values(reponse.errorsList).join('--'));
          }else{

            this.service.message("Désolé!!!", "error", "connexion  échouée, vérifier la saisie ");
          }

        }
      });
    }
  }

  showPassword() {
    this.showHidePassword = document.getElementById('passwordInput');
    if (this.showHidePassword.type == 'text') {
      this.showHidePassword.type = 'password';
    } else {
      this.showHidePassword.type = 'text';
    }
  }



  deconnexionAutomatique() {
    setTimeout(() => {
      if (this.service.IsOnline()) {
        Swal.fire({
          title: "Session expirée ",
          text: "Voulez vous renouvellez votre session, sinon vous serez déconnectez",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Oui",
          cancelButtonText: "Non"
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem("onlineUser");
            this.router.navigate(['/connexion']);
            // this.deconnexionAutomatique();
          } else {
            localStorage.removeItem("onlineUser");
            this.service.message("Au revoir", "success", "Déconnexion faite avec succès");
          }
        });
      }
    }, 10000);
  }
}
