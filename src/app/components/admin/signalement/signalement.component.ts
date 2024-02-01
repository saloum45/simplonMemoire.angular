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
      image: "https://www.consommonslocal.net/wp-content/uploads/2020/06/bisap-1L-PET-1-scaled.jpg",
      etat: "non bloqué",
      commercant: "FatouNdiaye@gmail.com"
    },
    {
      nom: "Boisson gazeuse",
      image: "https://www.consommonslocal.net/wp-content/uploads/2020/06/bisap-1L-PET-1-scaled.jpg",
      etat: "bloqué",
      commercant: "MamadouFall@gmail.com"
    },
    {
      nom: "Sirop de grenadine",
      image: "https://www.consommonslocal.net/wp-content/uploads/2020/06/bisap-1L-PET-1-scaled.jpg",
      etat: "bloqué",
      commercant: "AminataSow@gmail.com"
    },
    {
      nom: "Thé glacé",
      image: "https://www.consommonslocal.net/wp-content/uploads/2020/06/bisap-1L-PET-1-scaled.jpg",
      etat: "non bloqué",
      commercant: "OusmaneDiop@gmail.com"
    },
    {
      nom: "Jus d'ananas",
      image: "https://www.consommonslocal.net/wp-content/uploads/2020/06/bisap-1L-PET-1-scaled.jpg",
      etat: "non bloqué",
      commercant: "MariamaGueye@gmail.com"
    },
    {
      nom: "Cocktail de fruits",
      image: "https://www.consommonslocal.net/wp-content/uploads/2020/06/bisap-1L-PET-1-scaled.jpg",
      etat: "bloqué",
      commercant: "IbrahimaSeck@gmail.com"
    },
    {
      nom: "Eau de coco",
      image: "https://www.consommonslocal.net/wp-content/uploads/2020/06/bisap-1L-PET-1-scaled.jpg",
      etat: "non bloqué",
      commercant: "KhadyCamara@gmail.com"
    },
    {
      nom: "Soda à l'orange",
      image: "https://www.consommonslocal.net/wp-content/uploads/2020/06/bisap-1L-PET-1-scaled.jpg",
      etat: "bloqué",
      commercant: "AbdoulayeDiallo@gmail.com"
    },
    {
      nom: "Jus de pamplemousse",
      image: "https://www.consommonslocal.net/wp-content/uploads/2020/06/bisap-1L-PET-1-scaled.jpg",
      etat: "non bloqué",
      commercant: "AïssatouMbengue@gmail.com"
    },
    {
      nom: "Boisson énergisante",
      image: "https://www.consommonslocal.net/wp-content/uploads/2020/06/bisap-1L-PET-1-scaled.jpg",
      etat: "bloqué",
      commercant: "MoussaNdiaye@gmail.com"
    }
]



  // Methodes

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
  }
}
