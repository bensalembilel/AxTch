import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ListeProduitsComponent} from './liste-produits/liste-produits.component';


const routes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'list', component: ListeProduitsComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
