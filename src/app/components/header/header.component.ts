import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Attributs
  public navLinks=[
    {
      path:"accueil",
      name:"Accueil",
      icon:"bi bi-house-check-fill"
    },
    {
      path:"catalogue",
      name:"Catalogue",
      icon:"bi bi-shop"

    },
    {
      path:"contact",
      name:"Contact",
      icon:"bi bi-person-lines-fill"
    },
    {
      path:"panier",
      name:"Panier",
      icon:"bi bi-cart3"
    }
  ];

  // activeLink() {
  //   let links = document.querySelectorAll('a');
  //   links.forEach((element: any) => {
  //     element.addEventListener('click', () => {
  //       links.forEach((element: any) => {
  //         element.classList.remove('active-link');
  //       });
  //       // alert('okay')
  //       element.classList.add('active-link');
  //     });
  //   });
  // }
}
