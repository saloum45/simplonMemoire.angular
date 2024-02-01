import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [
    DataTablesModule
  ],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent implements OnInit{
  dtOptions: DataTables.Settings = {};
  public tab: any[] = [
    {
      nom: "coumba diouf",
      email: "diouf@gmail.com",
      numero: "778249632",
      adresse: "mbao",
      etat: "commerçant",
      action: "action",
    },
    {
      nom: "Mamadou Diallo",
      email: "diallo@gmail.com",
      numero: "776543210",
      adresse: "Dakar",
      etat: "commerçant",
      action: "action"
    },

    {
      nom: "Aminata Fall",
      email: "fall@gmail.com",
      numero: "781234567",
      adresse: "Thiès",
      etat: "consommateur",
      action: "action"
    },

    {
      nom: "Fatou Camara",
      email: "camara@gmail.com",
      numero: "779876543",
      adresse: "Kaolack",
      etat: "commerçant",
      action: "action"
    },

    {
      nom: "Modou Sow",
      email: "sow@gmail.com",
      numero: "783210987",
      adresse: "Saint-Louis",
      etat: "consommateur",
      action: "action"
    },

    {
      nom: "Mariama Ndiaye",
      email: "ndiaye@gmail.com",
      numero: "774567890",
      adresse: "Ziguinchor",
      etat: "commerçant",
      action: "action"
    },

    {
      nom: "Ousmane Ba",
      email: "ba@gmail.com",
      numero: "780987654",
      adresse: "Tambacounda",
      etat: "consommateur",
      action: "action"
    },

    {
      nom: "Astou Mbengue",
      email: "mbengue@gmail.com",
      numero: "772345678",
      adresse: "Diourbel",
      etat: "commerçant",
      action: "action"
    },

    {
      nom: "Abdoulaye Diop",
      email: "diop@gmail.com",
      numero: "785432109",
      adresse: "Louga",
      etat: "consommateur",
      action: "action"
    },

    {
      nom: "Sokhna Diagne",
      email: "diagne@gmail.com",
      numero: "771098765",
      adresse: "Fatick",
      etat: "commerçant",
      action: "action"
    },

    {
      nom: "Papa Gueye",
      email: "gueye@gmail.com",
      numero: "786789012",
      adresse: "Kolda",
      etat: "consommateur",
      action: "action"
    }
  ];

  ngOnInit(): void {
    this.dtOptions = {
      searching: true,
      lengthChange: false,
      paging: true,
      info: false,
      pageLength: 9,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json',
      }
    };
  }

}
