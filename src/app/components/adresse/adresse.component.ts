import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adresse',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './adresse.component.html',
  styleUrl: '../../auth/connexion/connexion.component.css'
})
export class AdresseComponent {
// Attributs
public adresse="";
}
