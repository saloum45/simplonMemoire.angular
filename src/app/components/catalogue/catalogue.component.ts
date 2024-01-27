import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit{
 // Attributs
 public produits:any=[];
 public categories:any=[];


 // Methodes
 constructor(private service:AllservicesService){

 }

 ngOnInit(): void {
  this.loadAllProducts();
   this.service.get("api/categories",(reponse:any)=>{
    this.categories=reponse.data;
    console.log(reponse.data);
  });
 }

 loadAllProducts(){
  this.service.get("api/produits",(reponse:any)=>{
    this.produits=reponse.data;
    console.log(reponse.data);
  });
 }

 getProductByCategorie(id:any){
  this.service.get("api/produits/"+id,(reponse:any)=>{
    this.produits=reponse.data;
    console.log("prod: ",id,reponse.data);
  });
 }
}
