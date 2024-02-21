import { Component } from '@angular/core';

@Component({
  selector: 'app-test-vero',
  standalone: true,
  imports: [],
  templateUrl: './test-vero.component.html',
  styleUrl: './test-vero.component.css'
})
export class TestVeroComponent {
// Attributs
public isSecondCrenaux=false;

 addCrenaux(){
  this.isSecondCrenaux=!this.isSecondCrenaux;
 }
}
