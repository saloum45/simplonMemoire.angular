import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AllservicesService } from '../../services/allservices.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-commande',
  standalone: true,
  imports: [
    DataTablesModule,
    DatePipe
  ],
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css'
})
export class CommandeComponent implements OnInit {

  // Attributs
  dtOptions: DataTables.Settings = {};
  public commandes: any[] = [];

  // Methodes
  constructor(private service: AllservicesService) {

  }
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
    this.service.get('api/listeCommande', ((reponse: any) => {
      console.log(reponse);
      this.commandes=reponse.data;
    }));

  }
}
