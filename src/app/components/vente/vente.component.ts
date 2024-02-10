import { Component } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AllservicesService } from '../../services/allservices.service';

@Component({
  selector: 'app-vente',
  standalone: true,
  imports: [
    DataTablesModule
  ],
  templateUrl: './vente.component.html',
  styleUrl: './vente.component.css'
})
export class VenteComponent {
 // Attributs
 dtOptions: DataTables.Settings = {};
 public ventes:any[]=[
   {
       date_commande: "17-08-2024",
       nombre_articles: 7,
       montant: 5200,
       mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
       etat: "en cours",
       test:''
   },
   {
       date_commande: "21-03-2024",
       nombre_articles: 3,
       montant: 3200,
       mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
       etat: "en attente",
       text:''
   },
   {
       date_commande: "09-11-2024",
       nombre_articles: 6,
       montant: 7400,
       mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
       etat: "terminée",
       test:''
   },
   {
       date_commande: "05-02-2024",
       nombre_articles: 4,
       montant: 4800,
       mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
       etat: "en cours",
       test:''
   },
   {
       date_commande: "14-09-2024",
       nombre_articles: 5,
       montant: 6200,
       mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
       etat: "en attente",
       text:''
   },
   {
       date_commande: "30-06-2024",
       nombre_articles: 2,
       montant: 2100,
       mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
       etat: "terminée",
       test:''
   },
   {
       date_commande: "18-10-2024",
       nombre_articles: 8,
       montant: 8900,
       mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
       etat: "en cours",
       test:''
   },
   {
       date_commande: "22-12-2024",
       nombre_articles: 9,
       montant: 9700,
       mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
       etat: "en attente",
       text:''
   },
   {
       date_commande: "07-04-2024",
       nombre_articles: 1,
       montant: 1400,
       mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
       etat: "terminée",
       test:''
   },
   {
       date_commande: "12-01-2024",
       nombre_articles: 10,
       montant: 11200,
       mode_paiement: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00qCrRNOptSqAoifcheObYFIzPV0jihHAGA4Klf-5zQ&s",
       etat: "en cours",
       test:''
   }
]
;

// Methodes
constructor(private service:AllservicesService){

}
ngOnInit(): void {
 this.dtOptions = {
   searching: true,
   lengthChange: false,
   paging: true,
   info: false,
   pageLength: 5,
   language: {
     url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json',
   }
 };
 this.service.get('api/listeVentes',((reponse:any)=>{
  console.log(reponse);
 }));
}
}
