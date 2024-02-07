import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AllservicesService } from '../../../services/allservices.service';

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
  public signalements :any[]=[];
  public urlBaseImage=this.service.urlBaseImage;


  // Methodes
  constructor(private service:AllservicesService){

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
    this.service.get('api/ListeProduitSignaler',((reponse:any)=>{
      console.log(reponse);
      this.signalements=reponse.data;
    }));
  }
}
