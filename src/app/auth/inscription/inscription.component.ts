import { Component } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Commerçant } from '../../models/commerçant';
import { NgClass } from '@angular/common';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    NgClass
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
  public emailError: any;
  public detectedInputError=true;


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

            this.service.message("Désolé!!!", "error", "Inscription  échouée, vérifier la saisie => " + Object.values(reponse.errorsList).join('--'));
          } else {

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

  // validations

  emailValidate() {
    let validationEmail=document.getElementById('validationEmail');
    const emailRegexGegin = /^[a-z]+[.a-z0-9]+@[a-z]+[.]+[a-z]{2,}$/;
    this.emailError = emailRegexGegin.test(this.email);
    if (emailRegexGegin.test(this.email) ) {
      console.log(emailRegexGegin.test(this.email));
      validationEmail!.innerHTML='valide';
      validationEmail!.classList.remove('error');
      validationEmail!.classList.add('success');
    }else{
      console.log(emailRegexGegin.test(this.email));
      validationEmail!.innerHTML='invalide';
      validationEmail!.classList.remove('success');
      validationEmail!.classList.add('error');
    }
  }

  nomValidate() {
    let validationNom=document.getElementById('validationNom');

    const nomPrenomRegex = /^[a-zA-Z]{2,}$/;
    if (nomPrenomRegex.test(this.nom) ) {
      console.log(nomPrenomRegex.test(this.nom));
      validationNom!.innerHTML='valide';
      validationNom!.classList.remove('error');
      validationNom!.classList.add('success');
    }else{
      console.log(nomPrenomRegex.test(this.nom));
      validationNom!.innerHTML='invalide';
      validationNom!.classList.remove('success');
      validationNom!.classList.add('error');
    }
  }
  prenomValidate() {
    let validationPrenom=document.getElementById('validationPrenom');
    const nomPrenomRegex = /^[a-zA-Z]{2,}$/;
    if (nomPrenomRegex.test(this.nom) ) {
      console.log(nomPrenomRegex.test(this.nom));
      validationPrenom!.innerHTML='valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
    }else{
      console.log(nomPrenomRegex.test(this.nom));
      validationPrenom!.innerHTML='invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
    }
  }

  telephoneValidate() {
    let validationPrenom=document.getElementById('validationTelephone');
    const nomPrenomRegex = /^[0-9]{9,}$/;
    if (nomPrenomRegex.test(this.numero) ) {
      console.log(nomPrenomRegex.test(this.numero));
      validationPrenom!.innerHTML='valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
    }else{
      console.log(nomPrenomRegex.test(this.numero));
      validationPrenom!.innerHTML='invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
    }
  }
  ninValidate() {
    let validationPrenom=document.getElementById('validationTelephone');
    const nomPrenomRegex = /^[0-9]{10,}$/;
    if (nomPrenomRegex.test(this.nin) ) {
      console.log(nomPrenomRegex.test(this.nin));
      validationPrenom!.innerHTML='valide';
      validationPrenom!.classList.remove('error');
      validationPrenom!.classList.add('success');
    }else{
      console.log(nomPrenomRegex.test(this.nin));
      validationPrenom!.innerHTML='invalide';
      validationPrenom!.classList.remove('success');
      validationPrenom!.classList.add('error');
    }
  }
}
