import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-vero',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './test-vero.component.html',
  styleUrl: './test-vero.component.css'
})
export class TestVeroComponent {
  // Attributs
  public isSecondCrenaux = false;
  public plannings: any[] = [];
  public planningsObjet: any = {
    jour: "",
    creanaux: [
      {
        startTime: "",
        endTime: ""
      }
    ]
  };

  addCrenaux() {
    this.isSecondCrenaux = !this.isSecondCrenaux;
  }
  addPlannings() {
    //  throw new Error('Method not implemented.');
    this.plannings.push(this.planningsObjet);
    console.log(this.plannings)

  }

  selectJour(event: any) {
    this.planningsObjet.jour = event.target.value;
  }
}

