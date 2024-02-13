import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
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
        if (reponse.status==200) {
          this.service.message('Parfait','success','Merci de vous être inscrit dans notre newsletter');
        }else{
          this.service.message('Oops','warning','Il semble que ce mail est déja inscrit');

        }
      }));
    }
  }


}
