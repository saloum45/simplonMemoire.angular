import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-signalement',
  standalone: true,
  imports: [
    DataTablesModule
  ],
  templateUrl: './signalement.component.html',
  styleUrl: './signalement.component.css'
})
export class SignalementComponent implements OnInit {
  // /Attributs
  dtOptions: DataTables.Settings = {};
  public signalement = [
    {
      nom: "Jus de mangue",
      etat: "non bloqué",
      commercant: "Fatou Ndiaye"
    },

    {
      nom: "Boisson gazeuse",
      etat: "bloqué",
      commercant: "Mamadou Fall"
    },

    {
      nom: "Sirop de grenadine",
      etat: "bloqué",
      commercant: "Aminata Sow"
    },

    {
      nom: "Thé glacé",
      etat: "non bloqué",
      commercant: "Ousmane Diop"
    },

    {
      nom: "Jus d'ananas",
      etat: "non bloqué",
      commercant: "Mariama Gueye"
    },

    {
      nom: "Cocktail de fruits",
      etat: "bloqué",
      commercant: "Ibrahima Seck"
    },

    {
      nom: "Eau de coco",
      etat: "non bloqué",
      commercant: "Khady Camara"
    },

    {
      nom: "Soda à l'orange",
      etat: "bloqué",
      commercant: "Abdoulaye Diallo"
    },

    {
      nom: "Jus de pamplemousse",
      etat: "non bloqué",
      commercant: "Aïssatou Mbengue"
    },

    {
      nom: "Boisson énergisante",
      etat: "bloqué",
      commercant: "Moussa Ndiaye"
    }
  ];


  // Methodes

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
