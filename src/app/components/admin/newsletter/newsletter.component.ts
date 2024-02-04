import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../../../services/allservices.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent implements OnInit{
  // Attributs
  public letter="";

  // Methodes
  constructor(private service:AllservicesService){

  }
  ngOnInit(): void {
    // this.informer();
  }

  informer(){
    alert('test');
    this.service.post('api/envoyerMail',{letter:this.letter},((reponse:any)=>{
      console.log(reponse);
    }));
  }
}
