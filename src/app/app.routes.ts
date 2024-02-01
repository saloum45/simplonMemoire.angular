import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { PanierComponent } from './components/panier/panier.component';
import { ConfirmCommandComponent } from './components/confirm-command/confirm-command.component';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { InscriptionComponent } from './auth/inscription/inscription.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailsProduitComponent } from './components/details-produit/details-produit.component';
import { AddProduitComponent } from './components/produit/add-produit/add-produit.component';
import { ListProduitComponent } from './components/produit/list-produit/list-produit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdresseComponent } from './components/adresse/adresse.component';
import { CommandeComponent } from './components/commande/commande.component';
import { EditProduitComponent } from './components/produit/edit-produit/edit-produit.component';
import { VenteComponent } from './components/vente/vente.component';

export const routes: Routes = [

  // {
  //   path:"",
  //   component:AccueilComponent
  // },
  {
    path:"",redirectTo:"accueil",pathMatch:"full"
  },
  {
    path:"accueil",
    component:AccueilComponent
  },
  {
    path:"catalogue",
    component:CatalogueComponent
  },
  {
    path:"detailsProduit/:id",
    component:DetailsProduitComponent
  },
  {
    path:"panier",
    component:PanierComponent
  },
  {
    path:"confirmCommand",
    component:ConfirmCommandComponent
  },
  {
    path:"connexion",
    component:ConnexionComponent
  },
  {
    path:"inscription",
    component:InscriptionComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"addProduit",
    component:AddProduitComponent
  },
  {
    path:"listProduit",
    component:ListProduitComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"adresse",
    component:AdresseComponent
  },
  {
    path:"commande",
    component:CommandeComponent
  },
  {
    path:"editProduit/:id",
    component:EditProduitComponent
  },
  {
    path:"listVente",
    component:VenteComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  }
];
