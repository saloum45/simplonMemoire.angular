import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../../../services/allservices.service';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-livraison',
  standalone: true,
  imports: [
    DataTablesModule
  ],
  templateUrl: './livraison.component.html',
  styleUrl: './livraison.component.css'
})
export class LivraisonComponent implements OnInit {
  // Attributs
dtOptions: DataTables.Settings = {};
public livreurs:any[]=[];
  public commandes: any[] = [
    {
      date_commande: "14-06-2024",
      adresse: "Almadies",
      etat: "en cours"
    },

    {
      date_commande: "03-11-2024",
      adresse: "Mermoz",
      etat: "en attente"
    },

    {
      date_commande: "20-09-2024",
      adresse: "Point E",
      etat: "terminée"
    },

    {
      date_commande: "08-04-2024",
      adresse: "Yoff",
      etat: "en cours"
    },

    {
      date_commande: "17-07-2024",
      adresse: "Parcelles Assainies",
      etat: "en attente"
    },

    {
      date_commande: "29-01-2024",
      adresse: "Hann Bel-Air",
      etat: "terminée"
    },

    {
      date_commande: "12-10-2024",
      adresse: "Diamniadio",
      etat: "en cours"
    },

    {
      date_commande: "05-02-2024",
      adresse: "Thiaroye",
      etat: "en attente"
    },

    {
      date_commande: "23-05-2024",
      adresse: "Guédiawaye",
      etat: "terminée"
    },

    {
      date_commande: "01-12-2024",
      adresse: "Ouest Foire",
      etat: "en cours"
    }
  ];


  // Methodes
  constructor(private service: AllservicesService) {

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
    this.loadAllCommands();
  }

  loadAllCommands() {
    this.service.get('api/commandes', ((reponse: any) => {
      console.log(reponse);
    }));
  }

  getLivreurs(){
    this.service.get("api/ListerLivreur",((reponse:any)=>{
      console.log(reponse);
      this.livreurs=reponse.data;
    }));
  }
}
