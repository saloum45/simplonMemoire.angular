import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AllservicesService } from '../../../services/allservices.service';

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
  // Attributs

  dtOptions: DataTables.Settings = {};
  public listeUtilisateurs:any[]=[];




  // Methodes
  constructor(private service:AllservicesService){

  }
  ngOnInit(): void {
    this.service.get('api/ListeUtilisateur',((reponse:any)=>{
      console.warn(reponse);
      this.listeUtilisateurs=reponse.users;
    }));
    
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
