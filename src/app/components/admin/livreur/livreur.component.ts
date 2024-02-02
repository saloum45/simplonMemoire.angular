import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { Livreur } from '../../../models/livreur';
import { FormsModule } from '@angular/forms';
import { AllservicesService } from '../../../services/allservices.service';

@Component({
  selector: 'app-livreur',
  standalone: true,
  imports: [
    DataTablesModule,
    FormsModule
  ],
  templateUrl: './livreur.component.html',
  styleUrl: './livreur.component.css'
})
export class LivreurComponent implements OnInit{
// Attributs
public livreur=new Livreur("","","","livreur1234","","");
public livreurs:any[]=[];
dtOptions: DataTables.Settings = {};
// public livreurs=[
//   {
//     nom: "Mamadou Diallo",
//     email: "diallo@gmail.com",
//     numero: "776543210",
//     adresse: "Dakar",
//     etat: "libre",
//     },

//     {
//     nom: "Aminata Fall",
//     email: "fall@gmail.com",
//     numero: "781234567",
//     adresse: "Thiès",
//     etat: "occupé",
//     },

//     {
//     nom: "Fatou Camara",
//     email: "camara@gmail.com",
//     numero: "779876543",
//     adresse: "Kaolack",
//     etat: "libre",
//     },

//     {
//     nom: "Modou Sow",
//     email: "sow@gmail.com",
//     numero: "783210987",
//     adresse: "Saint-Louis",
//     etat: "occupé",
//     },

//     {
//     nom: "Mariama Ndiaye",
//     email: "ndiaye@gmail.com",
//     numero: "774567890",
//     adresse: "Ziguinchor",
//     etat: "libre",
//     },

//     {
//     nom: "Ousmane Ba",
//     email: "ba@gmail.com",
//     numero: "780987654",
//     adresse: "Tambacounda",
//     etat: "occupé",
//     },

//     {
//     nom: "Astou Mbengue",
//     email: "mbengue@gmail.com",
//     numero: "772345678",
//     adresse: "Diourbel",
//     etat: "libre",
//     },

//     {
//     nom: "Abdoulaye Diop",
//     email: "diop@gmail.com",
//     numero: "785432109",
//     adresse: "Louga",
//     etat: "occupé",
//     },

//     {
//     nom: "Sokhna Diagne",
//     email: "diagne@gmail.com",
//     numero: "771098765",
//     adresse: "Fatick",
//     etat: "libre",
//     },

//     {
//     nom: "Papa Gueye",
//     email: "gueye@gmail.com",
//     numero: "786789012",
//     adresse: "Kolda",
//     etat: "occupé",
//     }
// ]



// Methodes
constructor(private service:AllservicesService){

}
ngOnInit(): void {
  this.dtOptions = {
    searching: true,
    lengthChange: false,
    paging: true,
    info: false,
    pageLength: 7,
    language: {
      url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json',
    }
  };
  this.getLivreurs();
}


AjouterLivreur(){
  this.service.post("api/registerLivreur",this.livreur,((reponse:any)=>{
    if (reponse.status==200) {
      console.log("liv",reponse);
      this.service.message('Parfait','success','Livreur ajouté avec succès');
    }
  }));
}

getLivreurs(){
  this.service.get("api/ListerLivreurDisponible",((reponse:any)=>{
    console.log(reponse);
    this.livreurs=reponse.data;
  }));
}
}
