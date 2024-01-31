import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { AllservicesService } from '../../services/allservices.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
public password="Saloum45";
public email="saloumfall45@gmail.com";

// Methodes
constructor(private service:AllservicesService, private router:Router){

}

// la fonction qui permet d'inscrire un utilisateur
connexion() {
  if ( this.password=="" || this.email=="") {
    this.service.message("Désolé", "error", "Veuillez renseigner tous les champs");
  } else {

    this.service.post('api/login', {email:this.email,password:this.password}, (reponse: any) => {
      if (reponse.status == 200) {
        let onlineUser={
          token:reponse.authorization.token,
          id:reponse.user.id,
          type:reponse.user.type
        }
        localStorage.setItem("onlineUser",JSON.stringify(onlineUser));
        this.router.navigate(['/accueil']);
        this.service.message("Merci!!!", "success", "Connexion faite avec succès");
        // console.log("reponse conn",reponse);
      } else {
        // console.log('error ',reponse);
        this.service.message("Désolé!!!", "error", "connexion  échouée, vérifier la saisie ");
      }
    });
  }
}
}
