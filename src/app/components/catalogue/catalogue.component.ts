import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit{
 // Attributs
 public produits:any=[];
 public categories:any=[];
 public titre="Tout";
 public searchInput="";


 // Methodes
 constructor(private service:AllservicesService){

 }

 ngOnInit(): void {
  this.loadAllProducts();
   this.service.get("api/categories",(reponse:any)=>{
    this.categories=reponse.data;
    // console.log(reponse.data);
  });
 }

 loadAllProducts(){
  this.service.get("api/produits",(reponse:any)=>{
    this.produits=reponse.data;
    // console.log(reponse.data);
    this.titre="Tout";
  });
 }

 getProductByCategorie(id:any,nom_categorie:any){
  this.service.get("api/produits/"+id,(reponse:any)=>{
    this.produits=reponse.data;
    this.titre=nom_categorie;
    // console.log("prod: ",id,reponse.data);
  });
 }

 search(){
    return this.produits.filter((prod:any)=>prod.nom_produit.toLowerCase().includes(this.searchInput.toLowerCase()));
 }

 postPanier(produit:any){
  this.service.postToPanier(produit);
 }
}
