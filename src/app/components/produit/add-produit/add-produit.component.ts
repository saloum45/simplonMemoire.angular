import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../../../services/allservices.service';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent implements OnInit {
  // Attributs
  public categories:any=[];


  // Methodes
  constructor(private service:AllservicesService){

  }
  ngOnInit(): void {
    this.service.get("api/categories",(reponse:any)=>{
      this.categories=reponse.data;
      console.log(reponse.data);
    });
  }

}
