import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  // Attributs
  public nom = "";
  public email = "";
  public numero = "";
  public message = "";


  // Methodes
  constructor(private service: AllservicesService) {

  }
  ngOnInit(): void {

  }

  envoyer() {
    if (this.nom == "" || this.email == "" || this.numero == "" || this.message == "") {
      this.service.message('Oops', 'error', 'Veuillez renseigner tous les champs');
    } else {
      this.service.post("api/faireFeedback", { nom: this.nom, email: this.email, numero_tel: this.numero, message: this.message }, ((reponse: any) => {
        if (reponse.status == 200) {
          this.nom = "";
          this.email = "";
          this.numero = "";
          this.message = "";
          this.service.message('Parfait', 'success', 'Envoie fait avec succès');
        } else {
          this.service.message('Oops', 'error', 'Vériifer la saisie');
        }
      }));
    }
  }
}
