import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SocieteComponent } from './societe/societe.component';
import { LocataireComponent } from './locataire/locataire.component';
import { LocationComponent } from './location/location.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ChargesComponent } from './charges/charges.component';
import { QuittanceComponent } from './quittance/quittance.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateLocPhyComponent } from './create-loc-phy/create-loc-phy.component';
const routes: Routes = [
  { path:'' , 
  component: HomeComponent },
 // children:[
  { path:'dashboard',
  component: DashboardComponent },
  { path:'societe',
  component: SocieteComponent },
  {
    path:'locataire',
    component:LocataireComponent
  },
  {
    path:'location',
    component:LocationComponent
  },
  {
    path:'paiement',
    component:PaiementComponent
  },
  {
    path:'charges',
    component:ChargesComponent
  },
  {
    path:'quittance',
    component:QuittanceComponent
  },
  {
    path:'documents',
    component:DocumentsComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'create-loc-phy',
    component:CreateLocPhyComponent
  }
 /*]
},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
