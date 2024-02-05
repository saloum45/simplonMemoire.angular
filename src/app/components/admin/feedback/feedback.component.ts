import { Component } from '@angular/core';
import { AllservicesService } from '../../../services/allservices.service';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    DataTablesModule
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  // Attributs
  dtOptions: DataTables.Settings = {};
  public feedbacks:any[]=[];
  public reponse="";





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
    this.loadAllFeedbakcs();
  }

  loadAllFeedbakcs(){
    this.service.get("api/ListeFeedback",((reponse:any)=>{
      this.feedbacks=reponse.data;
      console.log(this.feedbacks);
    }));
  }
}
