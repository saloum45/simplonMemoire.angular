import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AllservicesService } from '../../services/allservices.service';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-details-produit',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    CarouselModule,
    
  ],
  templateUrl: './details-produit.component.html',
  styleUrl: './details-produit.component.css'
})
export class DetailsProduitComponent implements OnInit {


  // Attributs
  public quantite = 1;
  public produit: any;
  public note = 0;
  public commentaire = "";
  public commentaires: any[] = [];


  // Methodes
  constructor(private service: AllservicesService, private activatedRouter: ActivatedRoute) {

  }
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal!: ElementRef;
  ngOnInit(): void {
    this.service.simplePost("api/Detailsproduits/" + this.activatedRouter.snapshot.params['id'], (reponse: any) => {
      this.produit = reponse.data;
      console.log("details", reponse.data);
    });
    this.loadCommentaires();
  }

  loadCommentaires() {
    this.service.get("api/commentaires/" + this.activatedRouter.snapshot.params['id'], ((reponse: any) => {
      this.commentaires = reponse.data;
      console.log('commmentaires', reponse);
    }));

  }
  // gestion de note avec étoile
  noteStar(note: number) {
    let stars = document.querySelectorAll('#star');
    stars.forEach((element: any) => {

      element.classList.remove("bi-star-fill");
      element.classList.add("bi-star");
    });
    for (let i = 0; i < note; i++) {
      stars[i].classList.remove("bi-star");
      stars[i].classList.add("bi-star-fill");
    }
    this.note = note;
  }

  upOrDownQuantity(type: string) {
    // if (this.quantite<1) {
    //   this.quantite=1;
    // }
    if (type == 'up') {
      this.quantite++;
    } else {
      this.quantite--;
    }
  }

  postPanier(produit: any,quantite=0) {
    this.service.postToPanier(produit,quantite);
  }

  envoyerAvis() {
    let avis = {
      note: this.note,
      commentaire: this.commentaire,
      // prduit_id: this.activatedRouter.snapshot.params['id'],
      // client_id: this.service.idOnline()
    }
    console.log("comm", avis);
    this.service.post("api/faireCommentaire/" + this.activatedRouter.snapshot.params['id'], avis, ((reponse: any) => {
      console.log("reponse", reponse);
      if (this.note == 0 || this.commentaire == "") {
        this.service.message("Oop's", "error", "Veuillez vérifier la saisie(pour noter cliquer sur les étoiles)");

      } else {

        if (reponse.status == 200) {
          this.service.message("Parfait", "success", "avis envoyé avec succès");
          this.commentaire = "";
          this.note = 0;
          this.closeAddExpenseModal.nativeElement.click();
        }
        this.loadCommentaires();

      }
    }));
  }

  showStar() {
    alert('hello');
  }
}
