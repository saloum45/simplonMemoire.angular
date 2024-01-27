import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit{
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
