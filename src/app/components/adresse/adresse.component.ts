import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AllservicesService } from '../../services/allservices.service';
import { Router } from '@angular/router';
import { Commerçant } from '../../models/commerçant';

@Component({
  selector: 'app-adresse',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './adresse.component.html',
  styleUrl: '../../auth/connexion/connexion.component.css'
})
export class AdresseComponent {
  // Attributs
  public nom = "";
  public prenom = "";
  public naissance = new Date();
  public genre = "";
  public nin = "";
  public ninea = "";
  public adresse = "";
  public numero = "";
  public pass = "";
  public email = "";
  public user: any;

  // Methodes
  constructor(private service: AllservicesService, private router: Router) {

  }
  ngOnInit(): void {
    this.loadProfil();
    this.showPassword();
  }

  loadProfil() {
    if (this.whoIsOnline() == "commercant") {
      // alert("commmercant")
      this.service.get('api/showCommercant', (reponse: any) => {
        console.log("user", reponse);
        this.nom = reponse.commercant.nom;
        this.prenom = reponse.commercant.prenom;
        this.email = reponse.commercant.email;
        this.nin = reponse.commercant.nin;
        this.naissance = reponse.commercant.date_naiss;
        this.numero = reponse.commercant.numero_tel;
        this.genre = reponse.commercant.genre;
        this.ninea = reponse.commercant.ninea;
        this.adresse = reponse.commercant.adresse;
      });
    } else if (this.whoIsOnline() == "client") {
      // alert("client")
      this.service.get('api/showClient', (reponse: any) => {
        console.log("user", reponse);
        this.nom = reponse.client.nom;
        this.prenom = reponse.client.prenom;
        this.email = reponse.client.email;
        this.naissance = reponse.client.date_naiss;
        this.numero = reponse.client.numero_tel;
        this.genre = reponse.client.genre;
        this.adresse = reponse.client.adresse;
      });

    }
  }
  // la fonction qui permet d'inscrire un utilisateur
  modification() {
    if (this.adresse=="") {
      this.service.message("Désolé", "error", "Veuillez renseigner tous les champs");
    } else {
      this.user = new Commerçant(this.nom, this.prenom, this.email, this.pass, this.numero, this.nin, this.ninea, this.adresse, this.genre, this.naissance);
      console.log("user", this.user);
      this.service.post('api/modifierInfoCommercant', this.user, (reponse: any) => {
        if (reponse.status == 200) {
          // console.log('success',reponse);
          //  this.router.navigate(['/connexion']);
          this.service.message("Parfait", "success", "Profil modifié avec succès");
          this.loadProfil();


        } else {
          console.log('error ', reponse);
          this.service.message("Désolé!!!", "error", "modification a échouée, vérifier la saisie");
        }
      });
    }
  }

  showPassword() {

  }

  whoIsOnline() {
    return this.service.whoIsOnline();
  }
}
