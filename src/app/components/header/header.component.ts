import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AllservicesService } from '../../services/allservices.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {



  // Attributs
  // public isOnline=this.service.IsOnline();
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
constructor(private service:AllservicesService, private router:Router){

}
  ngOnInit(): void {
    // console.log('test data',this.isOnline);
    // console.warn("test",JSON.parse(localStorage.getItem("onlineUser") ?? '{}').token);
  }
  // Methodes
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

  isOnline(){
   return this.service.IsOnline();
  }

  deconnexion(){
    localStorage.removeItem("onlineUser");
    this.router.navigate(['/accueil']);
    this.service.message("Au revoir","success","Déconnexion faite avec succès");
  }
}
