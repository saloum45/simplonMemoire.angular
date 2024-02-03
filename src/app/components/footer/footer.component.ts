import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  // Attributs





  // Methodes
  constructor(private service:AllservicesService){

  }
  ngOnInit(): void {

  }

  newsletterSubscribe(){
    this.service.message('Oops','warning','Cette fonctionnalité n\'est encore disponible')
  }
}
