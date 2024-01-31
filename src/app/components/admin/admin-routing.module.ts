import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path:"sidebar",
    component:SidebarComponent
  },
  {
    path:"accueil",
    component:AccueilAdminComponent
  },
  {
    path:"",redirectTo:"accueil",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {


}
