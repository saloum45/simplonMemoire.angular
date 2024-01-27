import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AllservicesService } from '../../services/allservices.service';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit{
  // Attributs
  public produits:any=[];


 // Methodes
 constructor(private service:AllservicesService){

 }

 ngOnInit(): void {
   this.service.get("api/produits",(reponse:any)=>{
     this.produits=reponse.data;
     console.log(reponse.data);
   });
 }
}
