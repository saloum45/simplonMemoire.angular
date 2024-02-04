import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  // Attributs
  public email = "";




  // Methodes
  constructor(private service: AllservicesService) {

  }
  ngOnInit(): void {

  }

  newsletterSubscribe() {
    if (this.email == "") {
      this.service.message("OOps", "error", "Veuillez renseigner le champs");
    } else {

      this.service.post('api/inscriptionNewsletter', { email: this.email }, ((reponse: any) => {
        console.log(reponse);
      }));
    }
  }


}
