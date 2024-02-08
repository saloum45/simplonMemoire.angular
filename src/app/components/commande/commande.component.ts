import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-commande',
  standalone: true,
  imports: [
    DataTablesModule
  ],
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css'
})
export class CommandeComponent implements OnInit{

  // Attributs
  dtOptions: DataTables.Settings = {};
  public commandes:any[]=[
    {
        date_commande: "17-08-2024",
        nombre_articles: 7,
        montant: 5200,
        mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
        etat: "en cours"
    },
    {
        date_commande: "21-03-2024",
        nombre_articles: 3,
        montant: 3200,
        mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
        etat: "en attente"
    },
    {
        date_commande: "09-11-2024",
        nombre_articles: 6,
        montant: 7400,
        mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
        etat: "terminée"
    },
    {
        date_commande: "05-02-2024",
        nombre_articles: 4,
        montant: 4800,
        mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
        etat: "en cours"
    },
    {
        date_commande: "14-09-2024",
        nombre_articles: 5,
        montant: 6200,
        mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
        etat: "en attente"
    },
    {
        date_commande: "30-06-2024",
        nombre_articles: 2,
        montant: 2100,
        mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
        etat: "terminée"
    },
    {
        date_commande: "18-10-2024",
        nombre_articles: 8,
        montant: 8900,
        mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
        etat: "en cours"
    },
    {
        date_commande: "22-12-2024",
        nombre_articles: 9,
        montant: 9700,
        mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
        etat: "en attente"
    },
    {
        date_commande: "07-04-2024",
        nombre_articles: 1,
        montant: 1400,
        mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
        etat: "terminée"
    },
    {
        date_commande: "12-01-2024",
        nombre_articles: 10,
        montant: 11200,
        mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
        etat: "en cours"
    }
]
;

// Methodes
ngOnInit(): void {
  this.dtOptions = {
    searching: true,
    lengthChange: false,
    paging: true,
    info: false,
    pageLength: 6,
    language: {
      url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json',
    }
  };
}
}
